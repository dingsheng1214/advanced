<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div id="container">
      <div id="left">
        <router-link to="/lifeCycle">生命周期</router-link>
        <router-link to="/customDirective">自定义指令</router-link>
        <router-link to="/communication">组件间通信</router-link>
        <router-link to="/ad-vmodel">vue高级特性-v-model</router-link>
        <router-link to="/ad-nextTick">vue高级特性-$nextTick</router-link>
      </div>
      <div id="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#container {
  display: flex;
}
#left {
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
}
#right {
  flex-grow: 1;
}
</style>
