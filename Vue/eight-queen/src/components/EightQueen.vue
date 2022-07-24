<template>
  <div>
    <button @click="change">change</button>
    <div v-for="mate in classmates" :key="mate.id">
      {{ mate.name }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classmates: [
        {id: 1, name: 'John'},
        {id: 2, name: 'Mary'},
      ]
    }
  },
  methods: {
    change() {
      this.$set(this.classmates, 1, {id: 1, name: 'John2'})
    }
  }
}
</script>

<style>

</style>