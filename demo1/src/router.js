import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projectlist',
      name: 'projectlist',
      component: () => import('./views/ProjectList.vue')
    },
    {
      path: '/project/:projectId',
      name: 'project',
      component: () => import('./views/Project.vue')
    }
  ]
})
