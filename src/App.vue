
<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      link: {
        login: `${this.$host}/login`
      }
    }
  },
  created () {
    sessionStorage.setItem('flag', true)
  },
  methods: {
    jump () {
      this.$router.push(`${this.$host}/login`)
    }
  }
}
</script>

<style lang="less">
  @import "commonStyle/index.less";
  #app {
    height: 100%;
    .icon {
      color: #5bb5ff;
    }
    .icon2 {
      color: red
    }
  }
</style>
