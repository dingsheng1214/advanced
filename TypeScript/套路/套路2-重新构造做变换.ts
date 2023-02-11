/**
 * 重新构造做变换
 *
 * TypeScript 支持 type、infer、类型参数来保存任意类型，相当于变量的作用。
 * 但其实也不能叫变量，因为它们是不可变的。
 * 想要变化就需要重新构造新的类型，并且可以在构造新类型的过程中对原类型做一些过滤和变换
 */

// 数组的重新构造---zip 提取元组中的两个元素，构造成新的元组
type tuple1 = [1, 2]
type tuple2 = ['guang', 'dong']
type tuple3 = ['hello', 'world', 'hello world']
type tuple4 = ['1', '2', '3']
// -> [[1, 'guang'], [2, 'dong']]
type zip1<One extends [unknown, unknown], Two extends [unknown, unknown]> =
    One extends [infer One1, infer One2] ? Two extends [infer Two1, infer Two2] ? [[One1, Two1], [One2, Two2]] : [] : []
type zip1Result = zip1<tuple1, tuple2>

type zip2<One extends unknown[],Two extends unknown[]> =
    One extends [infer One1, ...infer OneRest] ? Two extends [infer Two1, ...infer TwoRest] ? [[One1, Two1], ...zip2<OneRest, TwoRest>] : [] : []
type zip2Result = zip2<tuple3, tuple4>

// 字符串的重新构造
//  'guang' 转为首字母大写的 'Guang'
type Capitalized<Str extends string> = Str extends `${infer Head}${infer Tail}` ? `${Capitalize<Head>}${Tail}` : Str
type CapitalizedTest = Capitalized<'guang'>
// dong_dong_dong 到 dongDongDong 的变换
type CammelCase<Str extends string> = Str extends `${infer Head}_${infer Tail}` ? `${Head}${CammelCase<Capitalized<Tail>>}` : Str
type CammelCaseTest = CammelCase<'dong_dong_dong'>

// 索引类型的重新构造
type Obj = {a: 1, b: 2, c: 3}
// 对value重新构造
type Mapping<Obj extends object> = {
  [k in keyof Obj]: [Obj[k], Obj[k]]
}
type MappingTest = Mapping<Obj>
// 对key重新构造
type UppercaseKey<Obj extends Record<string, unknown>> = {
  [k in keyof Obj as Uppercase<k & string>]: [Obj[k], Obj[k]]
}
type UppercaseKeyTest = UppercaseKey<Obj>

type ToReadOnly<Obj extends object> = {
  readonly [k in keyof Obj]: Obj[k]
}
type ToReadOnlyTest = ToReadOnly<Obj>

type ToRequired<Obj extends object> = {
  -readonly [k in keyof Obj]: Obj[k]
}
type ToRequiredTest = ToRequired<ToReadOnlyTest>

type ToPartial<Obj extends object> = {
  [k in keyof Obj]?: Obj[k]
}
type ToPartialTest = ToPartial<Obj>

type ToMutable<Obj extends object> = {
  [k in keyof Obj]-?: Obj[k]
}
type ToMutableTest = ToMutable<ToPartialTest>
