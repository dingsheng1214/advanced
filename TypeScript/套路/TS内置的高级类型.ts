/**
 * Parameters - 获得函数中参数的类型
 * {@link Parameters}
 */
type f1 = (a: number, b: number, c: number, d: number, e: number) => void
type p1 = Parameters<f1>
type MyParameters<T extends Function> = T extends (...args: infer Args) => any ? Args : never
type p2 = MyParameters<f1>

/**
 * ReturnType - 获取函数返回值的类型
 * {@link ReturnType}
 */
type f2 = (a: number, b: number, c: number, d: number, e: number) => number
type p3 = ReturnType<f2>
type MyReturnType<T extends Function> = T extends (...args: unknown[]) => infer RT ? RT : never
type p4 = MyReturnType<f2>

/**
 * ConstructorParameters - 获取构造器参数的类型
 * {@link ConstructorParameters}
 */
type f3 = new (a: number, b: number, c: number, d: number, e: number) => void
type p5 = ConstructorParameters<f3>
type MyConstructorParameters<T extends new (...args: any[]) => any> = T extends new (...args: infer Args) => any? Args : never
type p6 = MyConstructorParameters<f3>


/**
 * InstanceType - 获取构造器返回值的类型
 * {@link InstanceType}
 */
type f4 = new (a: number, b: number, c: number, d: number, e: number) => number
type p7 = InstanceType<f4>
type MyInstanceType<T extends new (...args: any[]) => any> = T extends new (...args: unknown[]) => infer RT? RT : never
type p8 = MyInstanceType<f4>


/**
 * ThisParameterType - 获取类型参数的类型
 * {@link ThisParameterType}
 */
type Person = {name: 'guang'}
function  hello(this: Person) {
    console.log(this.name)
}
type p9 = ThisParameterType<typeof hello>
type MyThisParameterType<T> = T extends (this: infer ThisType, ...args: unknown[]) => any ? ThisType : never
type p10 = MyThisParameterType<typeof hello>
// let p11: p10 = {}

/**
 * Partial<T> - 将T中所有key设为可选
 * {@link Partial}
 */
type f5 = {name: string, age: number}
type p11 = Partial<f5>
type MyPartial<T> = {
    [key in keyof T]?: T[key]
}
type p12 = MyPartial<f5>

/**
 * Required<T> - 将T中所有key设为必选
 * {@link Required}
 */
type f6 = {name?: string, age?: number}
type p13 = Required<f6>
type MyRequired<T> = {
    [key in keyof T]-?: T[key]
}
type p14 = MyRequired<f6>

/**
 * Readonly - 将T中所有的key都设为 readonly
 * {@link Readonly}
 */
type f15 = {name: string, age: number}
type f16 = Readonly<f15>
type MyReadonly<T> = {
    readonly [key in keyof T]: T[key]
}
type f17 = MyReadonly<f15>

/**
 * Record - 快速创建索引类型
 */
type keyofAny = keyof any // string | number | symbol
type MyRecord<K extends keyof any, T> = {
    [key in K]: T
}
type RecordRes = MyRecord<'a' | 'b', number>

/**
 * Exclude - 从联合类型中剔除一部分类型
 * {@link Exclude}
 */
type MyExclude<T, U> = T extends U ? never : T
type ExcludeRes = MyExclude<'a' | 'b' | 'c', 'a' | 'c'>

/**
 * Extract - 从联合类型T中, 提取属于U的部分
 * {@link Extract}
 */
type MyExtract<T, U> = T extends U? T : never
type ExtractRes = MyExtract<'a' | 'b' | 'c', 'a' | 'd'>

/**
 * Pick - 从T中提取提取出属于联合类型K的 key
 * {@link Pick}
 */
type MyPick<T, K extends keyof T> = {
    [key in K]: T[key]
}
type f18 = MyPick<{name: 'dong', age: 18, sex: 'man'}, 'name' | 'sex'>

/**
 * Omit - 从T中排除属于联合类型K的 key
 */
type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
type f19 = MyOmit<{name: 'dong', age: 18, sex:'man'}, 'name' | 'age'>
type f20 = Omit<{name: 'dong', age: 18, sex:'man'}, 'name' | 'age'>
