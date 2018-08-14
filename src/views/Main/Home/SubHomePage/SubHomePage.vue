<template>
    <div>{{this.$route.params.id}}</div>
</template>

<script>
  export default {
    name: 'SubHomePage',
    computed: {
      name() {
        return this.$route.params.id
      }
    }
  }
</script>

<style scoped>

</style>
