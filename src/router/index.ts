import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/HomeView.vue'),
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('../views/detail/NewsDetail.vue'),
    },
  ],
});

export default router;
