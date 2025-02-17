<template>
  <div class="container">
    <!-- Header -->
    <header class="header">
      <nav class="nav">
        <router-link to="/">Главная</router-link>
        <router-link to="/catalog">Каталог</router-link>
        <router-link to="/services">Услуги</router-link>
        <router-link to="/projects">Готовые объекты</router-link>
        <button class="order-btn" @click="showOrderModal">Заказать звонок</button>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <h1>Строим дом вашей мечты</h1>
      <button class="cta-btn" @click="scrollToProjects">Посмотреть проекты</button>
    </section>

    <!-- Services Block -->
    <section class="services">
      <h2>Наши услуги</h2>
      <div class="services-grid">
        <ServiceCard
          v-for="service in services"
          :key="service.title"
          :service="service"
        />
      </div>
    </section>

    <!-- Completed Projects -->
    <section class="projects">
      <h2>Последние проекты</h2>
      <ProjectGallery :projects="projects" />
      <button class="scheme-btn" @click="showSchemes">Посмотреть схемы</button>
    </section>

    <!-- Footer -->
    <Footer />

    <!-- Modals -->
    <OrderModal v-if="showModal" @close="closeModal" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ServiceCard from '@/components/ServiceCard.vue'; // Ensure this file exists
import ProjectGallery from '@/components/ProjectGallery.vue'; // Ensure this file exists
import Footer from '@/components/Footer.vue'; // Ensure this file exists
import OrderModal from '@/components/OrderModal.vue'; // Ensure this file exists

// State Management
const services = ref([
  {
    title: 'Строительство домов',
    description: 'Полный цикл работ от проекта до сдачи',
    icon: '🏠',
  },
  {
    title: 'Ремонт квартир',
    description: 'Качественный ремонт под ключ',
    icon: '🛠️',
  },
  {
    title: 'Ландшафтный дизайн',
    description: 'Превращаем двор в произведение искусства',
    icon: '🌱',
  },
]);

const projects = ref([
  {
    id: 1,
    name: 'Дом у озера',
    image: '/images/project1.jpg',
    description: 'Современный дом с видом на озеро',
  },
  {
    id: 2,
    name: 'Коттедж в лесу',
    image: '/images/project2.jpg',
    description: 'Уютный коттедж в окружении природы',
  },
]); // Replace with actual data or fetch from API

const showModal = ref(false);

// Methods
const showOrderModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const scrollToProjects = () => {
  const projectsSection = document.querySelector('.projects');
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const showSchemes = () => {
  alert('Схемы будут показаны!');
};
</script>

<style scoped>
/* Styles for main sections */
.header {
  padding: 1rem;
  background: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav a {
  margin-right: 1rem;
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.order-btn {
  padding: 0.75rem 1.5rem;
  background: #ff8c00;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.hero {
  height: 70vh;
  background: url('@/assets/hero-bg.jpg') center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

.cta-btn {
  padding: 1rem 2rem;
  background: #ff8c00;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.services {
  padding: 2rem;
  text-align: center;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1
