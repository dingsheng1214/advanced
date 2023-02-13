/**
 * 数组长度做计数
 *
 * TypeScript 类型系统中没有加减乘除运算符，但是可以通过构造不同的数组然后取 length 的方式来完成数值计算，把数值的加减乘除转化为对数组的提取和构造
 */

// 数组长度做计数的核心： 根据一个数字构造出相应长度的unknown数组
type BuildArray<Length extends number, Ele = unknown, Arr extends unknown[] = []> =
  Arr['length'] extends Length? Arr : BuildArray<Length, Ele, [Ele, ...Arr]>

type num1 = [unknown]['length'] // 1
type num2 = [unknown, unknown]['length'] // 2
type num3 = [unknown, unknown, unknown]['length'] // 3

// 加法
type Add<num1 extends number, num2 extends number> = [...BuildArray<num1>,...BuildArray<num2>]['length']
type AddTest = Add<32, 25> // 57


// 减法
type Subtract<num1 extends number, num2 extends number> =
  BuildArray<num1> extends [...arr1: BuildArray<num2>, ...arr2: infer Rest1] ? Rest1['length'] : never

type SubtractTest = Subtract<32, 25> // 7

// 乘法: 乘法就是多个加法结果的累加 ==>  1 * 5 = 1 + 1 + 1 + 1 + 1
type Multiply<num1 extends number, num2 extends number, Result extends unknown[] = []> = num2 extends 0 ? Result['length'] :
   Multiply<num1, Subtract<num2, 1>, [...Result, ...BuildArray<num1>]>
type MultiplyTest = Multiply<3, 222> // 666

// 除法: 被减数不断减去减数，直到减为0，记录减了几次就是结果
type Divide<num1 extends number, num2 extends number, Result extends unknown[] = []> = num1 extends 0 ? Result['length'] :
  Divide<Subtract<num1, num2>, num2, [unknown, ...Result]>
type DivideTest = Divide<60, 2> // 30



// 字符串长度
type StringLength<str extends string, Result extends unknown[] = []> =
  str extends `${infer Head}${infer Tail}` ? StringLength<Tail, [...Result, Head]> : Result['length']
type StringLengthTest = StringLength<'guangguangguang'>
