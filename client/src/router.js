import Vue from 'vue'
import Router from 'vue-router'
import BossSchedule from './views/BossSchedule.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/boss_schedule'
    },
    {
      path: '/boss_schedule',
      name: 'boss_schedule',
      component: BossSchedule
    }
  ]
})

// ,
// {
//   path: '/about',
//   name: 'about',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
// }
