import fetch from 'node-fetch'

function* gen() {
  const url = 'https://api.github.com/users/dingsheng1214'
  const result = yield fetch(url)
  // ? result 有可能接收外部传值
  console.log(result.bio)
}

const g = gen()
const result = g.next()

result.value.then(res => {
  return res.json()
}).then(res2 => {
  g.next(res2) // ? res 会作为 yield mock_fetch(id)表达式的值
})