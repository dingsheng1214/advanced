const propertyDecorator: PropertyDecorator = (target: Object, propertyKey: string | symbol) => {
  let value: number
  Reflect.defineProperty(target, propertyKey, {
    get() {
      console.log('Getting value ...');
      return value
    },
    set(newVal: number) {
      value = newVal
    }
  })
}

export class TestClass {
  static elementId: string;

  @propertyDecorator
  id: number = 0

  printId(prefix: string = ''): string {
    return prefix + this.id
  }
}

console.log(new TestClass().id);

