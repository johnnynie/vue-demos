import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/index',
      name: 'layout',
      component:  () => import('@/views/Layout.vue'),
      redirect: '/index/home',
      children: [
        {
          path:'home',
          name: 'home',
          component: () => import('@/views/Home.vue')
        },
        {
          path:'projectlist',
          name:'projectlist',
          component: () => import('@/views/ProjectList.vue'),
          children:[
            {
              path:'project/:projectId',
              name:'project',
              components: {
                default: () => import('@/components/ProjectDetailHead.vue'),
                detail:() => import('@/components/ProjectDetailContent.vue')
              }
            }
          ]
        }
      ]
    },
    {
      path: '*',
      name: 'page404',
      component: () => import('@/views/404.vue')
    }
  ]
})
