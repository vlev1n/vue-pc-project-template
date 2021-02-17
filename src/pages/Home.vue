<template>
  <h1 class="text-blue-400">Hello world</h1>
</template>
<script>
export default {
  methods: {
    async getData() {
      const res = this.$fetchData('/', {})
      console.log(res)
    },
  },
  created() {
    this.getData()
  },
}
</script>
