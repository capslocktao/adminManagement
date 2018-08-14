import Vue from 'vue'
import Router from 'vue-router'
import { host } from '../constants/host'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: host,
  routes: [
    {
      path: `/login`,
      name: '登录',
      component: () => import('@/views/Login/Login')
    },
    {
      path: `/`,
      name: 'Main',
      redirect: '/home',
      component: () => import('@/views/Main/Main'),
      children: [
        {
          path: `/home`,
          name: 'Home',
          meta: {
            title: '首页'
          },
          component: () => import('@/views/Main/Home/Home.vue'),
          children: [
            {
              path: '/home/home-item/:id',
              name: 'SubHomePage',
              meta: {
                title: '首页详情'
              },
              component: () => import('@/views/Main/Home/SubHomePage/SubHomePage.vue'),
            }
          ]
        },
        {
          path: `/settings`,
          name: 'settings',
          meta: {
            title: '系统设置'
          },
          component: () => import('@/views/Main/SysSetting/SysSetting.vue'),
          children: [
            {
              path: `/settings/global-setting`,
              name: 'GlobalSetting',
              meta: {
                title: '全局设置'
              },
              component: () => import('@/views/Main/SysSetting/GlobalSetting/GlobalSetting.vue'),
            },
            {
              path: `/settings/authority`,
              name: 'Authority',
              meta: {
                title: '权限设置'
              },
              component: () => import('@/views/Main/SysSetting/Authority/Authority.vue'),
              children: [
                {
                  path: `/settings/authority/:id`,
                  name: 'Detail',
                  meta: {
                    title: '权限详情'
                  },
                  component: () => import('@/views/Main/SysSetting/Authority/Detail/Detail.vue'),
                }
              ]
            },
          ]
        }
      ]
    }
  ],
  linkActiveClass: 'active-menu',
  linkExactActiveClass: 'persist-active'
})
const routeList = []
router.beforeEach((to, from, next) => {
  const index = routeList.findIndex(v => v.name === to.meta.title)
  const routeItem = {
    to: to.fullPath,
    name: to.meta.title
  }
  if (index !== -1) {
    routeList.splice(index + 1, routeList.length - index - 1)
  } else {
    routeList.push(routeItem)
  }
  next()
})
export default router
