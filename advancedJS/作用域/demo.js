/**
 * 题目
 * 1. this 的不同应用场景, 如何取值?
 * 2. 手写bind函数
 * 3. 实际开发中闭包的应用场景,举例说明
 */

const {get} = require('http')

/**
 * 知识点
 * 1. 作用域与自由变量
 *    1.1 作用域: 所谓作用域其实就是变量的合法使用范围, 分为 全局作用域, 函数作用域, 块级作用域(let/const, try/catch, {})
 *    1.2 自由变量:
 *               一个变量在当前作用域没有定义,但被使用了
 *               向上级作用域,一层一层依次寻找,直到找到为止
 *               如果到全局作用域都没找到, 则报错 xx is not defined
 * 2. 闭包
 *    2.1 定义: 函数能够记住并访问创建它的词法作用域,及时函数执行时在该词法作用域之外
 *    2.2 场景:
 *          2.2.1 函数作为参数, 如回调
 *          2.2.2 函数作为返回值
 * 3. this
 *    3.1 普通函数内使用this      ---> 全局对象
 *    3.2 对象方法内使用this      ---> 对象方法所处对象
 *    3.3 class内使用this        ---> 当前实例对象
 *    3.4 箭头函数内使用this      ---> 箭头函数没有this, 向上级作用域取this
 *    3.5 call, apply, bind 使用this ---> this指向传递给call, apply, bind 的参数
 */

/**
 * 闭包
 */
// 2 闭包-函数作为参数
const a = 100
function print(fn) {
  const a = 200
  fn()
}
function fn() {
  console.log(a)
}
print(fn) // 100
// 2 j闭包-函数作为返回值
const b = 200
function create() {
  const b = 100
  return function () {
    console.log(b)
  }
}
const f = create()
f() // 100

/**
 * this
 */
function f1() {
  console.log(this)
}
f1() // 3.1 普通函数内使用this ---> Node下为 Global, 浏览器内为 Window

f1.call({x: 100}) // 3.5 call, apply, bind使用this ---> 指定参数

const zhangsan = {
  name: '张三',
  sayHi() {
    // 3.2 对象方法使用this ---> this指向当前对象
    console.log(this)
  },
  wait() {
    // 3.1 this指向window
    setTimeout(function () {
      console.log('对象方法使用this', this)
    })
  },
  waitAgain() {
    // 3.4 箭头函数内使用this ---> 箭头函数没有this,永远取上级作用域的this
    setTimeout(() => {
      console.log('箭头函数使用this', this)
    })
  },
}

/**
 * 手写bind函数
 */
Function._call = function (thisArg, ...args) {
  const fn = this
  thisArg.fn = fn
  thisArg.fn(...args)
}
Function._bind = function (thisArg, ...args1) {
  const fn = this
  return function (...args2) {
    return fn._call(thisArg, [...args1, ...args2])
  }
}
function ff(a, b, c) {
  console.log(this.x, a, b, c)
}
ff.bind({x: 100}, 1)(2, 3)

/**
 * 闭包的应用
 * 对外隐藏数据,只暴露api接口
 */
function createCache(initData = {}) {
  const data = initData // 闭包中的数据, 被隐藏, 不被外界访问
  return {
    setData(key, value) {
      data[key] = value
    },
    getData(key) {
      return data[key]
    },
  }
}
const {getData, setData} = createCache()

for (var i = 0; i <= 10; i++) {
  let j = i
  setTimeout(() => {
    console.log(j)
  })
}
