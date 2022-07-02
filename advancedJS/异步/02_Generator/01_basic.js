/**
 * ? 概念
 * ? 1. Generator 返回一个指针对象，并不会执行方法体
 * ? 2. 调用指针对象的next()方法，才会真正执行, 并返回一个 { value: any, done: 布尔值}
 */
function* gen(x) {
  let y = yield x + 2
  return y
}
const g = gen(1)
console.log(g.next())
console.log(g.next()) // { value: undefined, done: true}


/**
 * ? 特性1 函数体外的数据交换
 */
function* gen2(x) {
  let y = yield x + 2
  return y
}
const g2 = gen2(1)
console.log(g2.next())
// ? 函数体外的数据交换
// g2.next(2)  next()的参数会作为上一个yield表达式的结果，因此第一次调用next()传递的参数不会生效
console.log(g2.next(2)) // { value: 2, done: true}

/**
 * ? 特性2 错误处理
 */
function* gen3(x) {
  try {
    let y = yield x + 2
  } catch(e) {
    console.log(e)
  }
  return y
}
const g3 = gen3(1)
g.next()
g.throw('出错了')