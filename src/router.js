import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return {
      x: 0,
      y: 0
    }
  },
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '*',
      name: 'notFound',
      component: () => import('./views/NotFound.vue'),
      meta: {
        title: '404'
      }
    },
    {
      path: '/supplyMarket',
      name: 'supplyMarket',
      component: () => import('./views/SupplyMarket.vue'),
      meta: {
        title: "供应市场"
      }
    },
    {
      path: '/details/:id/:title',
      name: 'details',
      component: () => import('./views/Details.vue'),
      meta: {
        title: "服务详情"
      }
    }

  ]
})