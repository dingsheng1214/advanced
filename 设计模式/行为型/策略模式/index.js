// 假设要开发一个计算器，我们可以把一层层的if判断，改写成以下形式
function Strategy(type, a, b) {
  const strategies = {
    add(a, b) { return a + b },
    sub(a, b) { return a - b },
    mul(a, b) { return a * b },
    div(a, b) { return a / b }
  }
  return strategies[type](a, b)
}