<template>
    <div>详情{{name}}</div>
</template>

<script>
  export default {
    name: 'Detail',
    computed: {
      name() {
        return this.$route.params.id
      }
    }
  }
</script>

<style scoped>

</style>
