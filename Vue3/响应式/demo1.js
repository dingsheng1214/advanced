// 存储副作用函数的桶
const bucket = new WeakMap()

function cleanup(effectFn) {
  effectFn.deps.forEach((deps) => deps.delete(effectFn))
  effectFn.deps.length = 0
}
// 存储副作用函数
let activeEffect
const effectStack = []
function effect(fn, options = {}) {
  const effectFn = () => {
    cleanup(effectFn)
    activeEffect = effectFn
    effectStack.push(effectFn)
    const res = fn()
    effectStack.pop()
    activeEffect = effectStack[effectStack.length - 1]
    return res
  }
  // 用来存储所有与该副作用函数相关联的依赖集合
  effectFn.deps = []
  effectFn.options = options

  // 是否延迟执行
  if (!options.lazy) {
    effectFn()
  }
  return effectFn
}

// 依赖收集
function track(target, p) {
  if (!activeEffect) return
  let depsMap = bucket.get(target)
  if (!depsMap) {
    bucket.set(target, (depsMap = new Map()))
  }
  let deps = depsMap.get(p)
  if (!deps) {
    depsMap.set(p, (deps = new Set()))
  }
  // 把当前激活的副作用函数添加到依赖集合deps中
  deps.add(activeEffect)
  // deps就是一个与当前副作用函数存在联系的依赖集合
  activeEffect.deps.push(deps)
}

// 触发依赖
function trigger(target, p) {
  const depsMap = bucket.get(target)
  if (!depsMap) return
  const deps = depsMap.get(p)
  if (!deps) return
  // 防止无限循环
  const effects = new Set(deps)
  effects.forEach((fn) => {
    if (fn !== activeEffect) {
      if (fn.options.scheduler) {
        fn.options.scheduler(fn)
      } else {
        fn()
      }
    }
  })
}

const data = {ok: true, text: 'hello world', foo: 1, bar: 1}
const obj = new Proxy(data, {
  get(target, p) {
    track(target, p)
    return target[p]
  },
  set(target, p, newValue) {
    target[p] = newValue
    trigger(target, p)
  },
})

// computed
function computed(getter) {
  let lastValue
  let dirty = true
  const effectFn = effect(getter, {
    lazy: true,
    scheduler() {
      dirty = true
      trigger(obj, 'value')
    },
  })

  const obj = {
    get value() {
      if (dirty) {
        lastValue = effectFn()
        dirty = false
      }
      track(obj, 'value')
      return lastValue
    },
  }
  return obj
}

// watch
function watch(source, cb) {
  effect(() => source.foo, {
    scheduler() {
      cb()
    },
  })
}
const sum = computed(() => {
  console.log('computed')
  return obj.foo + obj.bar
})
effect(() => {
  console.log(sum.value)
})

obj.foo = 3
