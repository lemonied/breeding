import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: import.meta.env.VITE_ROUTE_TYPE === 'hash' ?
    createWebHashHistory(import.meta.env.VITE_BASE_URL) :
    createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('../components/layout/CommonLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/home/HomeView.vue'),
        },
        {
          path: '/detail',
          name: 'detail2',
          component: () => import('../views/detail/NewsDetail.vue'),
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
        {
          path: '/search',
          name: 'search',
          component: () => import('../views/search/SearchList.vue'),
        },
      ],
    },
  ],
});

export default router;
