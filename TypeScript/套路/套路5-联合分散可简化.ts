/**
 * 联合分散可简化
 *
 * 1 当类型参数为联合类型，
 * 2 并且在条件类型左边直接引用该类型参数的时候，
 *
 * TypeScript 会把每一个元素单独传入来做类型运算，最后再合并成联合类型，这种语法叫做分布式条件类型。
 */

// 1 Ademo 是联合类型
type Ademo = 'a' | 'b' | 'c' | 'd' | 'e'
// 2 Item extends 'a', Item 在 extends 的左边
type UppercaseA<Item extends string> = Item extends 'a' ? Uppercase<Item> : Item
type Result = UppercaseA<Ademo>
