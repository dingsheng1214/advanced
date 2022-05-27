function Animal() {}

let obj1 = Object.create(Animal.prototype)

let obj2 = {}
Object.setPrototypeOf(obj2, Animal.prototype)

console.log(obj1 instanceof Animal)
console.log(obj2 instanceof Animal)
