<template>
  <div class="project-card">
    <img :src="project.image" :alt="project.title">
    <div class="card-content">
      <h3>{{ project.title }}</h3>
      <div class="specs">
        <p v-for="(value, key) in project.specs" :key="key">
          {{ key }}: {{ value }}
        </p>
      </div>
      <button @click="$emit('select', project)">Подробнее</button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  project: {
    title: string
    image: string
    specs: Record<string, string>
    price: number
  }
}>()
</script>
