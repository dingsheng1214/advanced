# 模板

## 模板语法

> Vue.js使用了基于HTML的模板语法，所有Vue.js的模板都是合法的HTML，所以能被遵循规范的浏览器和HTML解析器解析。

```html
<div id="app">
  <!-- 文本插值 -->
  <p>{{ message }}</p>
  <!-- 一次性插值 -->
  <div v-once>{{ title }}</div>
  <!-- 插入原始HTML -->
  <div v-html="description"></div>
  <!-- Js 表达式 -->
  <div>{{ gender === 'male' ? 'boy' : 'girl'}}</div>
</div>
```

## 指令

> 指令是带有 `v-`前缀的特殊属性

```html
<img v-bind:src="img.src">
<img :src="img.src">

<button v-on:click="showTitle">showTitle</button>
<button @click="showTitle">showTitle</button>
```

## 条件渲染

### v-if

+ `真正`的条件渲染，切换过程中条件块内的时间监听器和子组件会被适当的销毁和重建
+ 是`惰性`的：直到条件第一次变为真时，才会开始渲染条件块

```html
<div v-if="male">i am a super man</div>
<div v-else-if="female">i am a super woman</div>
<div v-else>i am no one</div>
```

### v-show

+ 带有v-show的元素始终都会被渲染并保留在DOM中。v-show只是简单的切换元素的css属性`display`

```html
<div v-show="handle">
  <v-rich-editor></v-rich-editor>
</div>
```

## 循环渲染

+ 不推荐在同一元素上使用`v-if`和`v-for`
+ 非要用，记住`v-for`的优先级高于`v-if`

```html
<div v-for="(p, index) in classmates" :key="p.id">
  {{ `${index}.${p.name}` }}
</div>
```

## ref

```html
<base-input ref="usernameInput"></base-input>
```

模板渲染后

```js
this.$refs.usernameInput.focus()
```
