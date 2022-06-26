/**
 * 柯里化:
 *        柯里化函数会接收到固定的参数，然后在柯里化函数里，返回一个新的函数，接收剩余参数。
 *        比如bind函数
 */

// 回调
function a(param) {}
Promise.resolve().then(a.bind(this, 123))

// bind
function inputTest(reg, value) {
  console.log(reg, value)
}
let _inputTest = inputTest.bind(this, /^[0-9]*$/)
_inputTest('hello')

// 比如我们想把num1这个参数固定下来，然后返回一个函数用于接收剩余参数num2
function aWithoutCurry(num1, num2) {
  console.log(num1, num2)
}
function aCurry(num1) {
  return function (num2) {
    console.log(num1, num2)
  }
}
aCurry(1)(2)

// 手写bind
Function.prototype.myBind = function (context, ...args1) {
  if (typeof this !== 'function') return
  const _method = this
  return function (...args2) {
    _method.call(context, ...[...args1, ...args2])
  }
}
function b(age, address) {
  console.log(this.name, age, address)
}

const _b = b.myBind({name: 'ding'}, '21')
_b('qingdao')
