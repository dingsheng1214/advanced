/**
 * 递归复用做循环
 */

// Promise 的递归复用
type DeepPromiseValueType<T extends Promise<unknown>> =
  T extends Promise<infer U>
  ? U extends Promise<unknown>
    ? DeepPromiseValueType<U>
    : U
  : never;
type ttt = Promise<Promise<Promise<Record<string, any>>>>;
type tttResult = DeepPromiseValueType<ttt>


// 数组
type arr1 = [1,2,3,4,5];
type ReverseArr<T extends unknown[]> = T extends [infer Head,...infer Tail] ? [...ReverseArr<Tail>,Head] : []
type ReverseArrResult = ReverseArr<arr1>;

type Include<T extends unknown[], X> = T extends [infer Head, ...infer Tail] ? (Head extends X ? true : Include<Tail, X>) : false;
type includeResult1 = Include<arr1, 5>;
type includeResult2 = Include<arr1, 6>;

type RemoveItem<T extends unknown[], X> = T extends [infer Head, ...infer Tail] ? (Head extends X ? Tail : [Head, ...RemoveItem<Tail, X>]) : T
type RemoveItemResult1 = RemoveItem<arr1, 5>;
type RemoveItemResult2 = RemoveItem<arr1, 6>;
