import 'reflect-metadata'

class Example {
  // property declarations are not part of ES7, though they are valid in TypeScript:
  // static staticProperty;
  // property;

  static staticMethod(p: string) {}
  method(p: string) {}
}

/**
 * 自定义元信息
 */
Reflect.defineMetadata('custom:annotation', Number, Example, 'staticProperty')
Reflect.defineMetadata(
  'custom:annotation',
  Number,
  Example.prototype,
  'property'
)
// method (on constructor)
Reflect.defineMetadata('custom:annotation', Number, Example, 'staticMethod')
// method (on prototype)
Reflect.defineMetadata('custom:annotation', Number, Example.prototype, 'method')

/**
 * 获取自定义元信息
 */
// property (on constructor)
const result1 = Reflect.getMetadata(
  'custom:annotation',
  Example,
  'staticProperty'
)

// property (on prototype)
const result2 = Reflect.getMetadata(
  'custom:annotation',
  Example.prototype,
  'property'
)

// method (on constructor)
const result3 = Reflect.getMetadata(
  'custom:annotation',
  Example,
  'staticMethod'
)

// method (on prototype)
const result4 = Reflect.getMetadata(
  'custom:annotation',
  Example.prototype,
  'method'
)

console.log(result1, result2, result3, result4)
