import 'reflect-metadata'
/**
 *
 * @param target 装饰 static method时,target为构造函数, 装饰实例方法时,taget为实例对象
 * @param propertyKey 方法名
 * @param propertyDescriptor 方法的属性描述符
 */
const methodDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, propertyDescriptor: PropertyDescriptor) => {
  console.log(target, propertyKey, propertyDescriptor);
  propertyDescriptor.value = function (...args: any[]) {
    return `Hello ${args}`
  }
}

export class TestClass {
  static elementId: string;
  id: number = 0

  printId(prefix: string = ''): string {
    return prefix + this.id
  }
}

Reflect.decorate([methodDecorator], TestClass.prototype, 'printId')
