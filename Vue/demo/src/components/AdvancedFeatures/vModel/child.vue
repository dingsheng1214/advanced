<template>
  <div>
    <select name="select" id="select" @change="select">
      <option
        v-for="item in list"
        :key="item.id"
        :value="item.id"
        :selected="item.id === selected"
      >
        {{ item.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'selected',
    event: 'change',
  },
  props: ['list', 'selected'],
  methods: {
    select(e) {
      console.log('child change', e.target.value)
      this.$emit('change', e.target.value)
    },
  },
}
</script>

<style></style>
