<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <eight-queen />
    <life-cycle />
  </div>
</template>

<script>
import EightQueen from './components/EightQueen'
import LifeCycle from './components/lifecycle/LifeCycle'

export default {
  name: 'App',
  components: {
    EightQueen,
    LifeCycle
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
