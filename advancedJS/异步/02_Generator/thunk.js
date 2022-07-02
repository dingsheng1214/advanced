/**
 * ? Generator的问题在于不会自动执行，需要next()手动调用
 */

const x = 6

// 传值调用
function f1(n) {
  return n * 2
}
const r1 = f1(x+ 5)

// 传名调用
function f2(thunkFn) {
  return thunkFn() * 2
}
const thunk = function() {
  return x + 5
}
const r2 = f2(thunk)

console.log(r1, r2);