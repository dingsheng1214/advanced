import Store from './vuex.js'
/**
 * 依赖类
 * 每个变量都有自己的Dep实例, 当该变量发生变化后，会通知所有依赖方(订阅方)
 */
class Dep {
  static target
  constructor() {
    this.subscribers = []
  }

  /**
   * 依赖收集
   * @param {*} sub
   */
  depend() {
    const target = Dep.target
    if(target && !this.subscribers.includes(target)) {
      this.subscribers.push(target)
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
  Dep.target = fun
  fun()
  Dep.target = null
}

/**
 * 转化为响应式数据
 *  1. 为每一个属性分配一个Dep实例，用于依赖收集和触发
 *  2. 通过Object.defineProperty(), get：依赖收集, set: 触发
 */
export function reactivity(data) {
  const deps = new Map()
  Object.keys(data).forEach(key => {
    deps.set(key, new Dep())
  })

  const proxyData = new Proxy(data, {
    get(obj, key) {
      deps.get(key).depend()
      return Reflect.get(obj, key)
    },
    set(obj, key, val){
      Reflect.set(obj, key, val)
      deps.get(key).notify()
      return true
    }
  })
  return proxyData
}


{
  // 测试1
  let total = 0
  let salePrice = 0
  let data = {
    price: 2,
    quantity: 5,
  }

  const proxyData = reactivity(data)

  watcher(() => {
    // 这个target会分别被 price和quantity的 dep 收集
    total = proxyData .price * proxyData.quantity
  })
  watcher(() => {
    // 这个target只会被price的dep收集
    salePrice = proxyData.price * 0.8
  })

  proxyData.quantity = 10
  console.log(total, salePrice)
  proxyData.price = 4
  console.log(total, salePrice)
}


{
  // 测试2
  const myPlugin = (store) => {
    // 当 store 初始化后调用
    store.subscribe((mutation, state) => {
      // 每次 mutation 之后调用
      // mutation 的格式为 { type, payload }
      console.log(mutation, state);
    })
  }
  const store = new Store({
    state: {
      count: 1,
    },
    mutations: {
      increment(state, num) {
        state.count += num
      },
    },
    plugins: [myPlugin]
  })

  watcher(() => {
    console.log('state-count: ', store.state.count)
  })

  store.commit('increment', 10)
}