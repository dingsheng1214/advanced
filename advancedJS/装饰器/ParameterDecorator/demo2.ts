const Param: ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) {

}

export class TestClass {
  static elementId: string;

  id: number = 0

  printId(prefix: string = ''): string {
    return prefix + this.id
  }
}