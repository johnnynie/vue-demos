import Vue from 'vue'
import Router from 'vue-router'
import Project from '@/views/Project.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'layout',
      component:  () => import('@/views/Layout.vue'),
      redirect: '/home',
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
          //对象模式
          props: { listTitle: "项目列表展示" },
          children:[
            {
              path:'project/:projectId',
              name:'project',
              //布尔模式
              props:true,
              component: Project
            }
          ]
        },
        // 对于包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项：
        {
          path:'projectlist2',
          name:'projectlist2',
          component: () => import('@/views/ProjectList2.vue'),
          //函数模式
          props: (route) => ({ listTitle: route.query.title }),
          children:[
            {
              path:'project2/:projectId',
              name:'project2',
              components: {
                default: () => import('@/components/ProjectDetailHead.vue'),
                detail: () => import('@/components/ProjectDetailContent.vue')
              },
              props:{default:false,detail:true}
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
