import fetch from 'node-fetch'

function* gen() {
  const url = 'https://api.github.com/users/dingsheng1214'
  const result = yield fetch(url)
  console.log(result.bio)
}

// 自动执行器
function run(generator) {
  let gen = generator()
  const next = (data) => {
    let result = gen.next(data)
    if(result.done) return result.value
    result.value.then(res1 => {
      return res1.json()
    }).then(res2 => {
      next(res2)
    })
  }
  next()
}
run(gen)