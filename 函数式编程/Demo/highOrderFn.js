/**
 * 内置高阶函数
 */
let arr = [1, 2, 3, 4, 5]

arr.forEach((item) => {
  console.log(item)
})

Array.prototype.myForEach = function (fn) {
  if (typeof fn !== 'function') {
    throw new TypeError(`${fn} is not a function`)
  }
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i, this)
  }
}

Array.prototype.myMap = function (fn) {
  if (typeof fn !== 'function') {
    throw new TypeError(`${fn} is not a function`)
  }
  const result = []
  for (let i = 0; i < this.length; i++) {
    result[i] = fn.call(this, this[i], i)
  }
  return result
}

Array.prototype.myReduce = function(fn, init) {
  if (typeof fn !== 'function') {
    throw new TypeError(`${fn} is not a function`)
  }
  let prev = init === undefined  ? this[0] : init
  let start = init === undefined ? 1 : 0
  for(let i = start; i < this.length; i++) {
    prev = fn.call(this, prev, this[i])
  }
  return prev
}


Array.prototype.myFilter = function(fn) {
  if (typeof fn !== 'function') {
    throw new TypeError(`${fn} is not a function`)
  }

  const result = []
  for (let i = 0; i < this.length; i++) {
    if(fn.call(this, this[i])) {
      result.push(this[i])
    }
  }
  return result
}



// TODO: test
console.log([1,2,3,4,5].myFilter(item => item > 3))

let r1 = arr.myReduce((prev, item) => {
  return prev + item
})
let r2 = arr.reduce((prev, item) => {
  return prev + item
})

console.log(r1, r2);

arr.myForEach((item, index, arr) => {
  console.log(item, index, arr)
})

const arr_1 = arr.myMap((item, i) => {
  return item + i
})
console.log(arr_1)
