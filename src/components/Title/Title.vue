<template>
    <div id="title">
      {{title}}
    </div>
</template>

<script>
  export default {
    name: 'Title',
    props: ['title']
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
