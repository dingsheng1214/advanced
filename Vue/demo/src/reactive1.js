/**
 * 依赖类
 * 每个变量都有自己的Dep实例, 当该变量发生变化后，会通知所有依赖方(订阅方)
 */
class Dep {
  static target
  constructor(key) {
    this.key = key
    this.subscribers = []
  }

  /**
   * 依赖收集
   * @param {*} sub
   */
  depend() {
    if(Dep.target && !this.subscribers.includes(Dep.target)) {
      this.subscribers.push(Dep.target)
    }
  }

  /**
   * 触发
   */
  notify() {
    this.subscribers.forEach(sub => queueJob(sub))
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
function reactivity(data) {
  Object.keys(data).forEach(key => {
    let initVal = data[key]
    const dep = new Dep(key)
    Object.defineProperty(data, key, {
      get() {
        dep.depend()
        return initVal // Remember the target we are running
      },
      set(val) {
        initVal = val
        console.log(dep);
        dep.notify() //Rerun saved targets
      }
    })
  })
}



/**
 * 异步队列刷新
 */
let queue = []
let nextTick = cb => Promise.resolve().then(cb)

let queueJob = job => {
  console.log(job);
  if(!queue.includes(job)) {
    queue.push(job)
    nextTick(flushJobs)
  }
}
let flushJobs = () => {
  let job
  while((job = queue.shift()) !== undefined) {
    job()
  }
}

let data = {
  price: 2,
  quantity: 5
}

reactivity(data)

watcher(() => {
  // 这个target会分别被 price和quantity的 dep 收集
  console.log('watcher...');
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

setTimeout(() => {
  console.log(total, salePrice);
}, 1);