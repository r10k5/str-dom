import { createRouter, createWebHistory } from 'vue-router';

// Определение маршрутов
const routes = [
  { path: '/', component: () => import('@/views/HomeView.vue') },
  { path: '/catalog', component: () => import('@/views/CatalogPage.vue') },
  // ... другие маршруты
];

// Создание роутера
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; // Экспорт роутера
