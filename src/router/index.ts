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
    {
      path: '/list/:id',
      name: 'list',
      component: () => import('../views/list/NewsList.vue'),
    },
  ],
});

export default router;
