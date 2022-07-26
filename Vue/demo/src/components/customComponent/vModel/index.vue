<template>
  <div>
    <child :list="list" v-model="selected" />
    <child :list="list" :selected="selected" @change="change" />

    <div>
      已选择：{{ selectedName }}
    </div>
  </div>
</template>

<script>
import child from './child.vue';
export default {
  components: {
    child
  },
  data() {
    return {
      list: [
        {id: 1, name: '张三'},
        {id: 2, name: '李四'},
        {id: 3, name: '王五'}
      ],
      selected: 1
    }
  },
  computed: {
    selectedName() {
      return this.list.find(item => item.id == this.selected).name
    }
  },
  methods: {
    change(id) {
      console.log('change');
      this.selected = id
    }
  }
}
</script>

<style>

</style>