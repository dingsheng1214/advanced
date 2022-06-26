function addTwo(num) {
  return num + 2
}
function minusOne(num) {
  return num - 1
}
function multiplyTwo(num) {
  return num * 2
}

let result1 = multiplyTwo(addTwo(minusOne(2)))
console.log(result1)

function compose(...fns) {
  return function (args) {
    return fns.reduce((prev, fn) => {
      return fn(prev)
    }, args)
  }
}
let result2 = compose(minusOne, addTwo, multiplyTwo)(2)
console.log(result2)

const pipe = async () => {
  const result3 = await Promise.resolve(2)
    .then(minusOne)
    .then(addTwo)
    .then(multiplyTwo)
  console.log(result3)
}
pipe()
