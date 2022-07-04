/**
 * ? then 的参数 onFulfilled 和 onRejected 可以缺省，如果 onFulfilled 或者 onRejected不是函数，
 * ? 将其忽略，且依旧可以在下面的 then 中获取到之前返回的值；
 * ?「规范 Promise/A+ 2.2.1、2.2.1.1、2.2.1.2」
 */
 Promise.resolve(1).then(2).then(a => {
  console.log(a); // 1
})

/**
 * ?  promise 可以 then 多次，每次执行完 promise.then 方法后返回的都是一个“新的promise"；
 * ? 「规范 Promise/A+ 2.2.7」
 */
const p1 = Promise.resolve(1234)
p1.then(res => res * 2).then(console.log)
p1.then(res => res * 3).then(console.log)

/**
 * ? 如果 then 的返回值 x 是一个普通值，那么就会把这个结果作为参数，
 * ? 传递给下一个 then 的成功的回调中；
 */
Promise.resolve(1).then(x => {
  return 123
}).then(console.log)

/**
 * ? 如果 then 中抛出了异常，那么就会把这个异常作为参数，传递给下一个 then 的失败的回调中；
 * ? 「规范 Promise/A+ 2.2.7.2」
 */
Promise.resolve(1).then(x => {
  throw Error('error')
}).then(() => {}, err => console.log('err:', err))

/**
 *  ? 如果 then 的返回值 x 是一个 promise，那么会等这个 promise 执行完，
 「规范 Promise/A+ 2.2.7.3、2.2.7.4」
 */
Promise.resolve(1).then(() => {
  return Promise.resolve(11) // ?   如果成功，就走下一个 then 的成功；
}).then(x => {
  console.log('then 1:', x);
  return Promise.reject(22)  // ?   如果失败，就走下一个 then 的失败；
}).then(y => {}, err => {
  console.log('then 2:', err);
  throw Error('33')          // ?   如果抛出异常，就走下一个 then 的失败；
}).then(z => {}, err => {
  console.log('then 3:', err);
})

/**
 * ? 如果 then 的返回值 x 和 promise 是同一个引用对象，造成循环引用，
 * ? 则抛出异常，把异常传递给下一个 then 的失败的回调中；
 * ?「规范 Promise/A+ 2.3.1」
 */
let p2 = Promise.resolve(1)
let p3 = p2.then(x => {
  return p3
})
p3.then(() => {}, err => {
  console.log('循环引用:', err); // ? Chaining cycle detected for promise #<Promise>
})