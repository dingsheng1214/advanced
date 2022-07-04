function packing(genF) {
  return new Promise((resolve, reject) => {
    const gen = genF()
    function step(nextF) {
      let next;
      try {
        next = nextF();
      } catch(e) {
        return reject(e)
      }
      if(next.done) {
        return resolve(next.value)
      }
      Promise.resolve(next.value).then(x => {
        step(() => gen.next(x))
      }, e => {
        step(() => gen.throw(e))
      })
    }
    step(() => gen.next(undefined))
  })
}
function* gen() {
  yield 1
  yield 2
  yield 3
}
// async 函数其实就是通过一个自动执行器包裹一个Generator
function async(genF) {
  return packing(genF)
}
