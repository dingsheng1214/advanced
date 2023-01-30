const loggerDecorator = (): MethodDecorator => {
  console.log('loggerDecorator called')

  /**
   * target: 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
   * propertyKey: 方法名称
   * descriptor: PropertyDescriptor 方法的属性描述符（最重要的参数）
   * 属性描述包含以下几个属性
      - configurable?: boolean; 能否使用delete、能否修改方法特性或修改访问器属性
      - enumerable?: boolean; 是否在遍历对象的时候存在
      - value?: any; 用于定义新的方法代替旧方法
      - writable?: boolean; 是否可写
      - get?(): any; 访问器
      - set?(v: any): void; 访问器
   */
  return function (
    object: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const method = descriptor.value

    descriptor.value = function (...args: any[]) {
      try {
        return method?.apply(this, args)
      } finally {
        const now = new Date().valueOf()
        console.log(`lasted logged in ${now}`)
      }
    }
  }
}

export class UserService {
  @loggerDecorator()
  login() {
    console.log('user login...')
  }
}

const user = new UserService()
user.login()
