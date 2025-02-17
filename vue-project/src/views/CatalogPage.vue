<template>
  <div class="catalog">
    <h2>Каталог домов</h2>
    <div class="filters">
      <select v-model="selectedMaterial">
        <option value="">Все материалы</option>
        <option value="дерево">Дерево</option>
        <option value="бетон">Бетон</option>
      </select>
      <input v-model="maxPrice" type="number" placeholder="Макс. цена">
    </div>
    <div class="catalog-grid">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
        @select="showProjectDetails"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useProjectsStore } from '@/stores/projects'
import ProjectCard from '@/components/ProjectCard.vue'

const projectsStore = useProjectsStore()
projectsStore.fetchProjects()

const selectedMaterial = ref('')
const maxPrice = ref<number | null>(null)

const filteredProjects = computed(() => {
  return projectsStore.projects.filter(project => {
    const matchesMaterial = selectedMaterial.value ? project.material === selectedMaterial.value : true
    const matchesPrice = maxPrice.value ? project.price <= maxPrice.value : true
    return matchesMaterial && matchesPrice
  })
})

const showProjectDetails = (project: any) => {
  // Переход на страницу с деталями проекта
}
</script>

<style scoped>
.catalog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.filters {
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
}
</style>
