/**
 * ? 装饰器模式（Decorator）能够在运行时动态地为原始对象增加一些额外的功能，使其变得更加强大
 *
 * ? vue中利用defineProperty可以监听对象，那么数组怎么办？
 * ? 直接操作数组的下标是不会触发响应式的，只能通过 装饰 数组原生的 push,shift等方法。
 */

const arr = [1, 2, 3]

const arrayPrototype = Array.prototype
const arrayMethods = Object.create(arrayPrototype)
const methods = ['push', 'pop', 'shift']

methods.forEach((method) => {
  arrayMethods[method] = function () {
    console.log(`${method} called`)
    return arrayPrototype[method].apply(this, arguments)
  }
})

// arr.__proto__ = arrayMethods,  arrayMethods.__proto__ = arrayPrototype
Reflect.setPrototypeOf(arr, arrayMethods)
arr.push(4)
