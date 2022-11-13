const obj = {
  age: 20,
  name: 'xxx',
  address: {
    city: 'beijing',
  },
  arr: ['a', 'b', {c: 1}],
}

function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) return obj
  const result = Array.isArray(obj) ? [] : {}
  Object.keys(obj).forEach((key) => {
    result[key] = deepClone(obj[key])
  })
  return result
}

const _clone = deepClone(obj)
obj.age = 21
obj.name = 'yyy'
obj.address.city = 'qingdao'
obj.arr[0] = 0
obj.arr[1] = 1
obj.arr[2].c = '1'

console.log(obj, _clone)
