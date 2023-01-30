const SetNameDecorator = (firstname: string, secondname: string) => {
  const name = `${firstname}-${secondname}`
  return <T extends new (...args: any[]) => any>(target: T) => {
    return class extends target {
      _name: string = name

      getName() {
        return this._name
      }
    }
  }
}

@SetNameDecorator('ding', 'sheng')
class UserService {
  [key: string]: any

  c() {}
}

const exp3 = () => {
  console.log()
  console.log('-----------------------示例3:装饰器工厂-----------------------')
  console.log(
    '-----------------------通过继承方式 重载getName方法-----------------------'
  )
  console.log()
  const user = new UserService()
  console.log(user.getName())
  console.log()
  console.log('-----------------------示例3:执行完毕-----------------------')
}

exp3()
