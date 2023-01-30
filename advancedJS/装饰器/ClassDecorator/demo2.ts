const HelloDecorator = <T extends new (...args: any[]) => any>(target: T) => {
  return class extends target {
    hello = 'override'

    constructor(...args: any[]) {
      super()
      console.log('HelloDecorator Constructor...')
    }
    sayHello() {
      return this.hello
    }
  }
}

@HelloDecorator
class Hello {
  [key: string]: any // 此处用于防止eslint提示sayHello方法不存在

  hello: string
  constructor() {
    console.log('Hello Constructor...')

    this.hello = 'test'
  }

  sayHello() {
    return this.hello
  }
}

const exp2 = () => {
  console.log(
    '-----------------------示例2:简单的类装饰器-----------------------'
  )
  console.log(
    '-----------------------动态添加一个sayHello方法以及覆盖hello的值-----------------------'
  )
  console.log()
  const hello = new Hello()
  console.log(hello, hello.sayHello())
  console.log()
  console.log('-----------------------示例2:执行完毕-----------------------')
}

exp2()

// -----------------------示例2:简单的类装饰器-----------------------
// -----------------------动态添加一个sayHello方法以及覆盖hello的值-----------------------

// Hello Constructor...
// HelloDecorator Constructor...
// Hello { hello: 'override' } override

// -----------------------示例2:执行完毕-----------------------
