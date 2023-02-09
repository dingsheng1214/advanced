/**
 * 模式匹配做提取
 */

// 提取数组第一个元素的类型
type arr = [1, 2, 3]
type GetFirst<Arr extends unknown[]> = Arr extends [infer First, ...unknown[]] ? First : never
type First = GetFirst<arr> // 1

// 提取数组最后一个元素的类型
type GetLast<Arr extends unknown[]> = Arr extends [...unknown[], infer Last] ? Last : never
type Last = GetLast<arr> // 3

// 去除掉最后一个元素
type PopArr<Arr extends unknown[]> = Arr extends [] ? [] : Arr extends [...infer Result, unknown] ? Result : never
type PopResult1 = PopArr<arr>
type PopResult2 = PopArr<[]>

// 去除第一个元素
type ShiftArr<Arr extends unknown[]> = Arr extends [] ? [] : Arr extends [unknown, ...infer Result] ? Result : never
type ShiftResult1 = ShiftArr<arr>
type ShiftResult2 = ShiftArr<[]>

// 判断字符串是否以某个前缀开头
type StartsWith<Str extends string, Prefix extends string> = Str extends `${Prefix}${infer Rest}` ? true : false
type StartsWithResult1 = StartsWith<'guang an dong', 'guang'>
type StartsWithResult2 = StartsWith<'guang an dong', 'dong'>

// 替换
type ReplaceStr<Str extends string, From extends string, To extends string> =
  Str extends `${infer Prefix}${From}${infer Suffix}` ? `${Prefix}${To}${Suffix}` : Str
type ReplaceStrResult1 = ReplaceStr<'guang and dong', 'guang', 'dong'>

// TrimRight 去掉空白字符
type TrimStrRight<Str extends string> = Str extends `${infer Left}${' ' | '\n' | '\t'}` ? TrimStrRight<Left> : Str
type TrimStrLeft<Str extends string> = Str extends `${' ' | '\n' | '\t'}${infer Right}` ? TrimStrLeft<Right> : Str
type trimTest = '  guang  '
type TrimRightResult = TrimStrRight<trimTest>
type TrimLeftResult = TrimStrLeft<trimTest>

type TrimStr<Str extends string> = TrimStrRight<TrimStrLeft<Str>>
type TrimStrResult = TrimStr<trimTest>

// 函数相关
// 提取参数
type GetParameters<Func extends Function > = Func extends (...args: infer Args) => void ? Args : []
type FuncTest = (first: string, second: string) => string
type GetParametersResult = GetParameters<FuncTest> // [first: string, second: string]
// 提取返回值
type GetReturnType<Func extends Function > = Func extends (...args: string[]) => infer Return? Return : []
type GetReturnResult = GetReturnType<FuncTest> // [first: string, second: string]
// this
class Dong {
  name: string
  constructor() {
    this.name = 'dong'
  }
  hello() {
    return `hello , I am ${this.name}`
  }
  hi(this: Dong) {
    return `hi, I am ${this.name}`
  }
}
const dong = new Dong()
dong.hello()
dong.hello.call({xxx: 'duang'})
// dong.hi.call({xxx: 'duang'}) // 开启 strictBindCallApply编译选项后就会报错
