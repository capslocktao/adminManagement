<template>
  <div id="main">
    <el-container>
      <el-header class="header">
        <div class="company-info">
          <div class="logo">
            <img src="../../assets/img/logo.png" alt="">
          </div>
        </div>
        <div class="user">
          <el-dropdown :hide-on-click="false" @command="userEvent">
            <span class="dropdown-name">
              {{ user.userName }} <i class="el-icon-arrow-down el-icon--right"/>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="userCenter">个人中心</el-dropdown-item>
              <el-dropdown-item command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span class="role">({{userRole}})</span>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px" class="aside-menu">
          <el-menu
            :default-active="routeList[0].path"
            :default-openeds="[routeList[0].path]"
            class="main-menu"
            background-color="#33485b"
            text-color="#afafaf"
            active-text-color="#fff"
            @open="handleOpen"
            @close="handleClose">
            <router-link v-for="m in menus" class="item" :to="m.to" v-if="!m.children" :key="m.to">
              <el-menu-item :index="m.name" class="nav-item">
                <i :class="m.icon"/>
                <span slot="title" class="nav-title">{{m.name}}</span>
              </el-menu-item>
            </router-link>
            <el-submenu v-for="v in menus" :index="v.to" v-if="v.children" :key="v.to" class="sub-item">
                <template slot="title">
                  <i :class="v.icon"/>
                  <span class="nav-title">{{v.name}}</span>
                </template>
                <router-link v-for="k in v.children" :to="k.to" :key="k.to">
                  <el-menu-item :index="k.name" class="sub-nav-item">{{k.name}}</el-menu-item>
                </router-link>
              </el-submenu>
          </el-menu>
        </el-aside>
        <el-main class="main-view">
          <div class="breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item v-for = "(v, i) in routeList" :to="i === 0 && v.path !== '/home'? '' : { path: v.path }" :key="v.path">{{v.name}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { ROLE_SYS_ADMIN, ROLE_USER } from '@/constants'
export default {
  name: 'Main',
  data() {
    return {
      prefix: this.$host,
      user: {
        userId: 'GFSYYGKJXA5454744DFSAA',
        userName: '用户xx',
        roleCode: '0'
      },
      menus: [
        {
          name: '首页',
          icon: 'icon-home',
          to: `/home`,
        },
        {
          name: '系统设置',
          icon: 'icon-setting',
          to: `/settings`,
          children: [
            {
              name: '全局设置',
              to: `/settings/global-setting`
            },
            {
              name: '权限设置',
              to: `/settings/authority`
            }
          ]
        }
      ]
    }
  },
  methods: {
    userEvent(command) {
      switch (command) {
        case 'logout':
          this.$msgbox({
            title: '确认退出吗？',
            message: '',
            showCancelButton: true,
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            beforeClose: (action, instance, done) => {
              if (action === 'confirm') {
                instance.confirmButtonLoading = true
                instance.confirmButtonText = '正在退出...'
                setTimeout(() => {
                  done()
                  setTimeout(() => {
                    instance.confirmButtonLoading = false
                  }, 300)
                }, 1000)
              } else {
                done()
              }
            }
          }).then(() => {
            this.$message({
              type: 'success',
              message: '退出成功',
              duration: 1500
            })
            this.$router.push(`${this.$host}/login`)
          })
          return
        case 'userCenter':
          this.$router.push(`${this.$host}/userCenter`)
      }
    },
    handleOpen(key, keyPath) {

    },
    handleClose(key, keyPath) {

    }
  },
  computed: {
    routeList() {
      const routes = []
      for (let i = 1; i < this.$route.matched.length; i++) {
        const item = this.$route.matched[i]
        routes.push({
          name: item.meta.title,
          path: item.path
        })
      }
      return routes
    },
    userRole() {
      switch (this.user.roleCode) {
        case ROLE_SYS_ADMIN:
          return '系统管理员'
        case ROLE_USER:
          return '普通成员'
        default:
          return '默认角色'
      }
    }
  }
}
</script>

<style scoped lang="less">
@import "style/Main.less";
</style>
