# new 
```js
function newFun(constructor) {
    // 1 创建一个新对象obj, obj.__proto__ = constructor.prototype
    const obj = Object.create(constructor.prototype)
    // 2 构造函数内部this指向obj
    const result = constructor.apply(obj)
    // 3 如果构造函数返回的是对象, 则返回这个对象, 否则返回obj
    return typeof result === 'object' && result !== null ? result : obj
}
```

# 继承
```js

// 继承原型上的属性
Child.prototype = new Parent();
// 修复 constructor
Child.prototype.constructor = Child;

// 静态属性继承
Child.__proto__ = Parent;
```