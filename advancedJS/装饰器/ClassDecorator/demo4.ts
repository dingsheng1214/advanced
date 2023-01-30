/**
 * @param target 被装饰类的构造器
 */
const Component: ClassDecorator = (target: Function) => {
  target.prototype.id = 100
}

/**
 *
 * @param id 参数
 * @returns  {ClassDecorator}
 */
const ComponentWithId = (id: number): ClassDecorator => {
  return (target: Function) => {
    target.prototype.id = id
  }
}

@ComponentWithId(200)
class TestClass {
  static elementId: string;
  id!: number;

  printId(prefix: string = ''): string {
    return prefix + this.id
  }
}

console.log(new TestClass().id);