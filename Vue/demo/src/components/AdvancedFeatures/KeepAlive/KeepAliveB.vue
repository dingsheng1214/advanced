<template>
  <div>KeepAlive-B</div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {
    console.log('mounted B')
  },
  destroyed() {
    console.log('destroyed B')
  },
}
</script>
