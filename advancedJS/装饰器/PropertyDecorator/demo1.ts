const MaxLength = (max: number): PropertyDecorator => {
  console.log('maxlength called...')

  return (target: any, propertyKey: string | symbol) => {
    console.log('maxlength running...')

    Object.defineProperty(target, propertyKey, {
      set(val: string) {
        console.log('maxlength validate...')
        if (val.length > max) {
          throw new Error(`${propertyKey as string} length max ${max}`)
        }
      },
    })
  }
}

class UserEntiry {
  @MaxLength(10)
  name: string

  constructor(name: string) {
    console.log('constructor')
    this.name = name
  }
}

const user = new UserEntiry('ding sheng hello')
