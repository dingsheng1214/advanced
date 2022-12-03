const obj = {
  name: 'haha',
  numbers: [1, 2, 3],
  info: {
    address: 'qingdao',
  },
}

function deepClone(obj) {
  if (typeof obj !== 'object') {
    return obj
  }
  const result = Array.isArray(obj) ? [] : {}

  for (const key in obj) {
    result[key] = deepClone(obj[key])
  }
  return result
}

let r = deepClone(obj)
obj.name = 'asdf'
obj.numbers = [1]
obj.info.address = 'shandong'

console.log(r, obj)
