import { createRouter, createWebHistory } from 'vue-router';
import Home from './view/home.vue';
import store from './store';
const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
  ],
});
router.beforeEach((to, from, next) => {
  if (to.meta.requiredLogin && !store.state.user.islogin) {
    next({ name: 'login' });
  } else if (to.meta.redirectAlreadyLogin && store.state.user.islogin) {
    next({ name: '/' });
  } else {
    next();
  }
});

export default router;
