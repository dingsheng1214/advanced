/**
 * 依赖类
 * 每个变量都有自己的Dep实例, 当该变量发生变化后，会通知所有依赖方(订阅方)
 */
class Dep {
  constructor() {
    this.subscribers = []
  }

  /**
   * 依赖收集
   * @param {*} sub
   */
  depend(sub) {
    if(sub && !this.subscribers.includes(sub)) {
      this.subscribers.push(sub)
    }
  }

  /**
   * 触发
   */
  notify() {
    this.subscribers.forEach(sub => sub())
  }
}

/**
 * Watcher参数fun内部如果有 data.key就会触发 get，从而触发依赖收集
 * @param {*} fun 有可能作为依赖被收集
 */
function watcher(fun) {
  target = fun
  fun()
  fun = null
}

/**
 * 转化为响应式数据
 *  1. 为每一个属性分配一个Dep实例，用于依赖收集和触发
 *  2. 通过Object.defineProperty(), get：依赖收集, set: 触发
 */
function reactivity(data) {
  const deps = new Map()
  const internalData = data
  Object.keys(data).forEach(key => {
    deps.set(key, new Dep())
  })

  const proxyData = new Proxy(internalData, {
    get(obj, key) {
      deps.get(key).depend(target)
      return Reflect.get(obj, key)
    },
    set(obj, key, val){
      Reflect.set(obj, key, val)
      deps.get(key).notify()
    }
  })
  return proxyData
}


let data = {
  price: 2,
  quantity: 5
}

data = reactivity(data)

watcher(() => {
  // 这个target会分别被 price和quantity的 dep 收集
  total = data.price * data.quantity
})
watcher(() => {
  // 这个target只会被price的dep收集
  salePrice = data.price * 0.8
})

data.quantity = 10
console.log(total, salePrice);
data.price = 4
console.log(total, salePrice);