import { createRouter, createWebHistory } from 'vue-router'
import Home from './view/home.vue'
import Login from './view/login.vue'
import ColumnDetail from './view/columnDetail.vue'
import CreatePost from './view/createPost.vue'
import store  from './store'
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
      component:Login,
      meta:{
        redirectAlreadyLogin:true
      }
    },
    {
      path:'/column:id',
      name:'column',
      component:ColumnDetail
    },
    {
      path:'/create',
      name:'create',
      component:CreatePost,
      meta:{
        requiredLogin:true
      }
    }
  ]
})
router.beforeEach((to,from,next) => {
  if(to.meta.requiredLogin && !store.state.user.islogin){
    next({ name:'login' })
  }else if(to.meta.redirectAlreadyLogin && store.state.user.islogin){
    next({ name:'/' })
  } else{
    next()
  }

})

export default router
