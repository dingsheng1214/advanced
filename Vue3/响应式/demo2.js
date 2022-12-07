const obj = {
  foo: 2,
  get bar() {
    return this.foo
  },
}

const p = new Proxy(obj, {
  get(target, key) {
    return target[key]
  },
})

console.log(p.bar)
