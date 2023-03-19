import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
      {
          path: '/',
          name: 'Home',
          component: () => import('../views/HomeView.vue'),
      },
      {
          path: '/country/:slug',
          name: 'Country',
          component: () => import('../views/CountryDetails.vue'),
      },
  ],
});

export default router
