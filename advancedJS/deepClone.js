let baseOptions = {
  name: 'max',
  age: undefined, // console.log(key, typeof source[key]);
  age1: null,
  age2: Object.create(null),
  getAge() {},
  hobbies: [1, 2],
  count: 1,
  data: {
    message: 'hello data',
  },
}

function deepClone(source) {
  let target
  if (typeof value === 'object' || typeof value === 'function') {
    if (Array.isArray(value)) {
      target = []
    } else {
      target = {}
    }
    for (const key in source) {
      target[key] = value
    }
  } else {
    target = source
  }
  return target
}
const copy = deepClone(baseOptions)

console.log(copy)
