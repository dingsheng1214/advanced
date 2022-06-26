/**
 * ! 纯函数
 */
let a = 1
function add1(num) {
  return a + num
}
add1(2) // 3
a = 5
// 同样的输入，不同的输出
add1(2) // 7

// 改造, 把外部依赖a,作为参数传入
function add2(a, num) {
  return a + num
}

/**
 * ! 无副作用
 */
let b = 1
function aPlus(a) {
  a += 1
  return a
}
console.log(aPlus(b))
console.log(b) // 基本数据类型，值拷贝

let obj = {
  a: 123,
}
function objPlus(obj) {
  const _obj = {...obj}
  _obj.a += 1
  return _obj
}
console.log(objPlus(obj))
console.log(obj) // 对象，引用拷贝;

let arr = [1, 2, 3]
function arrPlus(arr) {
  const _arr = [...arr]
  _arr.push(4)
  return _arr
}
console.log(arrPlus(arr))
console.log(arr) // 数组，引用拷贝;
