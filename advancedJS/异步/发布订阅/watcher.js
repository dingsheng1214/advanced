/**
 * ! 观察者模式
 *    ? 依赖收集: 在观察者模式里面，被观察者(Subject), 它只需要维护一套观察者(Watcher)的集合
 *    ? 通知: 将有关状态的任何变更自动的通知给它们(Watcher),这个设计是松耦合的
 */
let subject = {
  name: 'ding',
  age: 30,
  // 依赖搜集
  watchers: [],
  collect(cb) {
    this.watchers.push(cb)
  },
  // 通知
  notify() {
    this.watchers.forEach(watcher => {
      watcher()
    })
  }

}

// Object.defineProperty(subject, 'age', {
//   set(value) {
//     // 通知观察者
//     this.notify()
//   }
// })

subject = new Proxy(subject, {
  get(target, key) {
    return Reflect.get(target, key)
  },
  set(target, key, value) {
    Reflect.set(target, key, value)
    target.notify()
  }
})

subject.collect(() => {
  console.log('watcher1')
})
subject.collect(() => {
  console.log('watcher2')
})

subject.age = 12
subject.name = 'liu'