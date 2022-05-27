# 为什么使用this
```ts
function identify() {
  console.log(this.name.toUpperCase())
}

var me = {
  name: 'Kyle',
}
var you = {
  name: 'Reader',
}

identify.call(me)
identify.call(you)
```
这段代码可以在不同的上下文对象(`me`和`you`)中重复使用函数`identify`

如果不使用`this`,那就需要给`identify`**显式**的传入一个上下文对象
```ts
function identify(context) {
  console.log(context.name.toUpperCase())
}

var me = {
  name: 'Kyle',
}
var you = {
  name: 'Reader',
}

identify(me)
identify(you)
```
然而，`this`提供了一种更优雅的方式来**隐式**的“传递”一个对象引用，因此可以将API设计的更加简洁并且易于复用。

# 绑定规则
## 默认绑定
```ts
function foo() {
  console.log(this.a)
}
var a = 2
foo() // 2
```
## 隐式绑定
```ts
function foo() {
  console.log(this.a)
}
var obj = {
  a: 2,
  foo: foo
}
obj.foo() // 2
```
### 隐式丢失
```ts
function foo() {
  console.log(this.a)
}
var obj = {
  a: 2,
  foo: foo
}
var bar = obj.foo // 把`foo`的引用复制给`bar`
var a = 'oops, global'
bar() // oops, global
```
## 显式绑定
+ call
+ apply
+ bind
```ts
function foo() {
  console.log(this.a)
}
var obj = {
  a: 2,
}
foo.call(obj) // 2
```
## new 绑定
```ts
function foo(a) {
  this.a = a
}
var bar = new foo(2)
console.log(bar.a) // 2
```
## 箭头函数
箭头函数根据外层(函数或全局)作用域来决定this
```ts
function foo() {
  // 返回一个箭头函数
  return a => {
    console.log(this.a)
  }
}
var obj1 = {a: 2}
var obj2 = {a: 3}

var bar = foo.call(obj1)
bar.call(obj2) // 2, 不是3
```