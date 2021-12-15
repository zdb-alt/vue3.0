import { createRouter, createWebHistory } from 'vue-router'
import Home from './view/home.vue'
import Login from './view/login.vue'
import ColumnDetail from './view/columnDetail.vue'
const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes:[
    {
      path:'/',
      name:'home',
      component:Home
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/column:id',
      name:'column',
      component:ColumnDetail
    }
  ]
})

export default router
