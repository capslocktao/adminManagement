<template>
  <div>
    Home
    <div>
      <router-link v-for="v in list" :key="v.id" :to="prefix+v.id">{{v.name}}</router-link>
    </div>
    <router-view></router-view>

  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        prefix: '/home/home-item/',
        list: [
          {
            name: '首页子路由1',
            id: 3
          },
          {
            name: '首页子路由2',
            id: 4
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
