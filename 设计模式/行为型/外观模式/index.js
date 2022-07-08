/**
 * 我们在组织方法模块时可以细化多个接口，但是暴漏给外部使用时，要合为一个接口
 */

// 模块1
function Model1() {}
// 模块2
function Model2() {}

// 功能由模块1获取模块2的结果来完成
function use() {
  Model1(Model2())
}