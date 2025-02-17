<template>
  <div class="schemes">
    <h2>Схемы объектов</h2>
    <div class="schemes-grid">
      <div v-for="scheme in schemes" :key="scheme.id" class="scheme-item">
        <img :src="scheme.image" :alt="scheme.name">
        <p>{{ scheme.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const schemes = ref([
  { id: 1, name: 'Каркасный дом', image: '/images/scheme1.jpg' },
  { id: 2, name: 'Беседка', image: '/images/scheme2.jpg' }
])
</script>

<style scoped>
.schemes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.scheme-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
