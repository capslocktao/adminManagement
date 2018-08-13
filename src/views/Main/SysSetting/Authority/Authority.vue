<template>
  <div id="authority">
    <router-link class="authority-item" v-for="v in list" :key="v.id" :to="toWhere(v.id)">{{v.name}}</router-link>
    <div class="view">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Authority',
    data() {
      return {
        prefix: `${this.$host}/settings/authority`,
        list: [
          {
            name: '权限1',
            id: '1'
          },
          {
            name: '权限2',
            id: '2'
          },
        ]
      }
    },
    methods: {
      toWhere(id) {
        return `${this.prefix}/${id}`
      }
    }
  }
</script>

<style scoped lang="less">
@import './style/index.less';
</style>
