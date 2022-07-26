<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <life-cycle />
    <v-resize />
  </div>
</template>

<script>
import VResize from './components/directive/vResize'
import LifeCycle from './components/lifecycle/LifeCycle'
export default {
  name: 'App',
  components: {
    LifeCycle,
    VResize
}
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
</style>
