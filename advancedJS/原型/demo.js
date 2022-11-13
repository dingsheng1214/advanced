/**
 * 问题
 * 1 如何判断一个变量是不是数组?  a instanceof Array
 * 2 class的原型本质,怎么理解?
 *
 * 知识点
 * 1 class 和 继承
 *    1.1 class class本质是一个函数
 *    1.2 继承是通过原型链来实现的
 * 2 类型判断 instanceof
 *    2.1 instanceof :  a instanceof A , A 是否出现在a的原型链上
 * 3 原型和原型链
 *    3.1 原型: 存放共享属性和方法
 *    3.2 原型链: 将多个原型链接在一起就形成了原型链, 查找属性或方法时会顺着原型链从下往上查找
 */

// 1 class和继承
class People {
  constructor(name) {
    this.name = name
  }
  eat() {
    console.log(`${this.name} eat something`)
  }
}
class Student extends People {
  constructor(name, number) {
    // 执行父类的constructor, 初始化从父类继承的属性
    super(name)
    this.number = number
  }

  sayHi() {
    console.log(`姓名 ${this.name} 学号${this.number}`)
  }
}
const xialuo = new Student('夏洛', 100)
console.log(xialuo.name, xialuo.number)
xialuo.eat()
xialuo.sayHi()

// 2 类型判断 -- instanceof
// a instance A ----> 类型A是否出现在实例a的原型链上
console.log(xialuo instanceof Student)
console.log(xialuo instanceof People)
console.log(xialuo instanceof Object)

// 3 class的原型本质

// class 本质上就是一个function, 可见是语法糖
typeof Student // function
typeof People // function
/**
 * @see {Object.getPrototypeOf}
 * @see {Object.setPrototypeOf}
 * @see {Object.create}
 * @see {Object.hasOwnProperty}
 * @see {Object.isPrototypeOf}
 */
console.log(Object.getPrototypeOf(xialuo))
console.log(Object.getPrototypeOf(xialuo) === Student.prototype)

/**
 * 原型链
 */
console.log(xialuo.__proto__ === Student.prototype) // true
console.log(Student.prototype.__proto__ === People.prototype) // true
console.log(People.prototype.__proto__ === Object.prototype) // true
