# 插槽

## 具名插槽和默认插槽

+ 定义插槽： `<slot name="插槽名称"></slot>`
+ 调用插槽： `<template v-slot:插槽名称>...</template>`
  + 简写： `<template #:插槽名称>...</template>`

![](./assets/06_slot_01.jpg)

## 作用域插槽

> 插槽调用方使用定义插槽方的数组

![](./assets/06_slot_02.jpg)