import Vue from 'vue'
import Router from 'vue-router'
import { host } from '../constants/host'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: `${host}/login`,
      name: 'Login',
      component: () => import('@/views/Login/Login')
    },
    {
      path: `${host}/`,
      name: 'Main',
      component: () => import('@/views/Main/Main'),
      children: [
        {
          path: `${host}/`,
          name: 'Home',
          component: () => import('@/views/Main/Home/Home.vue'),
        },
        {
          path: `${host}/settings/global-setting`,
          name: 'Authority',
          component: () => import('@/views/Main/SysSetting/GlobalSetting/GlobalSetting.vue'),
        },
      ]
    }
  ],
  linkActiveClass: 'active-menu',
  linkExactActiveClass: 'persist-active'
})
router.beforeEach((to, from, next) => {
  next()
})
export default router
