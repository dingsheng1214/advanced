function Child() {
    this.age = 24
}

function Parent() {
    this.sex = 'man'
}
Parent.prototype.name = 'ding'

Child.prototype = new Parent();
Child.prototype.constructor = Child;

let c1 = new Child();

console.log(c1.sex);
console.log(c1);
console.log(Child.__proto__);

const a = 1
const b = 2
const c = 3