/**
 * 桥接模式
 *
 * 桥接模式（Bridge）能将抽象与实现分离，使二者可以各自单独变化而不受对方约束，使用时再将它们组合起来，
 * 就像架设桥梁一样连接它们的功能，如此降低了抽象与实现这两个可变维度的耦合度，以保证系统的可扩展性
 */
class MenuItem1 {
  word: string
  color: string
  constructor(word: string, color: string) {
    this.word = word
    this.color = color
  }
  onmouseover() {
    console.log(`${this.word}颜色是${this.color}`)
  }
}

// 笛卡尔积  word * color
const menu1Red = new MenuItem1('menu1', 'red')
const menu1Blue = new MenuItem1('menu1', 'blue')
const menu2Red = new MenuItem1('menu2', 'red')
const menu2Blue = new MenuItem1('menu2', 'blue')


// 使用桥接模式 word + color
class Color {
  color: string
  constructor(color: string) {
    this.color = color
  }
}
class Menu {
  word: string
  color: Color
  constructor(word: string) {
    this.word = word
  }

  setColor(color: Color) {
    this.color = color
  }
}
const red = new Color('red')
const blue = new Color('blue')

const menu1 = new Menu('menu1').setColor(red)
const menu2 = new Menu('menu2').setColor(blue)


