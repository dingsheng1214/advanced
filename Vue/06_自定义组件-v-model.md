# 双向绑定

> v-model 用于在表单元素 `<input>`、`<textarea>`、`<select>` 上创建双向数据绑定的语法糖

+ `<select>` 元素使用 value属性和change事件
+ `<textarea>`和`<input>` 元素使用 value属性和input事件
+ `<input type="checkbox">` 和 `<input type="radio">` 元素使用 checked属性和change事件

## 自定义组件使用 v-model

```js
// 自定义组件child
<script>
export default {
  model: {
    prop: 'selected',
    event: 'change'
  },
  prop: ['selected', 'list'],
  methods: {
    select(i) {
      this.$emit('change', i)
    }
  }
}
</script>
```

```html
<!-- 父组件 -->
<child :list="list" v-model="selected" />
<child :list="list" :selected="selected" @change="change" />
```