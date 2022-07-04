/**
 * ? 1. status
 *         * 1.1 pending: 初始状态
 *         * 1.2 fulfilled: 成功状态  --> value
 *         * 1.3 rejected: 失败状态   --> reason
 * ? 2. then(onFulfilled, onRejected)
 *         * 2.1 onFulfilled: 成功回调函数, 参数为 fulfilled value
 *         * 2.2 onRejected: 失败回调函数, 参数为 rejected reason
 *         * 2.3 同一个promise.then可以被调用多次
 *         * 2.4 promise.then必须返回一个promise
 *
 *
1 then 的参数 onFulfilled 和 onRejected 可以缺省，如果 onFulfilled 或者 onRejected不是函数，
  将其忽略，且依旧可以在下面的 then 中获取到之前返回的值；
 「规范 Promise/A+ 2.2.1、2.2.1.1、2.2.1.2」
2 promise 可以 then 多次，每次执行完 promise.then 方法后返回的都是一个“新的promise"；
 「规范 Promise/A+ 2.2.7」
3 如果 then 的返回值 x 是一个普通值，那么就会把这个结果作为参数，传递给下一个 then 的成功的回调中；

4 如果 then 中抛出了异常，那么就会把这个异常作为参数，传递给下一个 then 的失败的回调中；
 「规范 Promise/A+ 2.2.7.2」

5 如果 then 的返回值 x 是一个 promise，那么会等这个 promise 执行完，promise
  如果成功，就走下一个 then 的成功；
  如果失败，就走下一个 then 的失败；
  如果抛出异常，就走下一个 then 的失败；
 「规范 Promise/A+ 2.2.7.3、2.2.7.4」

6 如果 then 的返回值 x 和 promise 是同一个引用对象，造成循环引用，
  则抛出异常，把异常传递给下一个 then 的失败的回调中；
 「规范 Promise/A+ 2.3.1」
7 如果 then 的返回值 x 是一个 promise，且 x 同时调用 resolve 函数和 reject 函数，
  则第一次调用优先，其他所有调用被忽略；
 「规范 Promise/A+ 2.3.3.3.3」
 */
class PromiseA {
  constructor(executor) {
    this.status = 'pending'
    this.value = undefined
    this.reason = undefined

    this.onFulfilledFuns = []
    this.onRejectedFuns = []

    let resolve = (value) => {
      if (this.status === 'pending') {
        this.status = 'fulfilled'
        this.value = value
        this.onFulfilledFuns.forEach((fn) => fn())
      }
    }

    let reject = (reason) => {
      if (this.status === 'pending') {
        this.status = 'rejected'
        this.reason = reason
        this.onRejectedFuns.forEach((fn) => fn())
      }
    }

    try {
      executor(resolve, reject)
    } catch (e) {
      this.reject(e)
    }
  }

  then = (
    onFulfilled = (v) => v, // 值穿透
    onRejected = (err) => {
      throw Error(err)
    }
  ) => {
    let promise = new PromiseA((resolve, reject) => {
      if (this.status === 'fulfilled') {
        setTimeout(() => {
          try {
            let result = onFulfilled(this.value)
            PromiseA._resolvePromise(promise, result, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      } else if (this.status === 'rejected') {
        setTimeout(() => {
          try {
            let result = onRejected(this.reason)
            PromiseA._resolvePromise(promise, result, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      } else {
        this.onFulfilledFuns.push(() => {
          setTimeout(() => {
            try {
              let result = onFulfilled(this.value)
              PromiseA._resolvePromise(promise, result, resolve, reject)
            } catch (err) {
              reject(err)
            }
          }, 0)
        })
        this.onRejectedFuns.push(() => {
          setTimeout(() => {
            try {
              let result = onRejected(this.reason)
              Promise._resolvePromise(promise, result, resolve, reject)
            } catch (err) {
              reject(err)
            }
          })
        })
      }
    })
    return promise
  }

  /**
   *
   * @param {*} p: 当前then要返回的promise
   * @param {*} thenReturn: 当前then onFulfilled/onRejected 的返回值
   * @param {*} resolve
   * @param {*} reject
   */
  static _resolvePromise(p, thenReturn, resolve, reject) {
    if (p === thenReturn) {
      throw new Error('Chaining cycle detected for promise #<Promise>')
    }

    if (
      (typeof thenReturn === 'object' && thenReturn !== null) ||
      typeof thenReturn === 'function'
    ) {
      if (typeof thenReturn.then === 'function') {
        thenReturn.then(
          (val) => {
            resolve(val)
          },
          (err) => {
            reject(err)
          }
        )
      } else {
        resolve(thenReturn)
      }
    } else {
      resolve(thenReturn)
    }
  }

  static resolve(value) {
    return new PromiseA((resolve) => {
      resolve(value)
    })
  }
}
module.exports = PromiseA
