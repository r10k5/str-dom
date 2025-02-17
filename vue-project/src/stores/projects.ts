import { defineStore } from 'pinia';
import { ref } from 'vue';

// Интерфейс Project (опционально)
interface Project {
  id: number;
  name: string;
  description?: string;
}

export const useProjectsStore = defineStore('projects', () => {
  // Состояние
  const projects = ref<Project[]>([]);
  const isLoading = ref(false);

  // Actions
  async function fetchProjects() {
    try {
      isLoading.value = true; // Устанавливаем флаг загрузки
      const response = await fetch('https://api.example.com/projects'); // Замените на ваш API
      if (!response.ok) throw new Error('Ошибка при получении данных');
      const data = await response.json();
      projects.value = data; // Обновляем состояние
    } catch (error) {
      console.error('Ошибка при загрузке проектов:', error);
    } finally {
      isLoading.value = false; // Очищаем флаг загрузки
    }
  }

  return { projects, isLoading, fetchProjects };
});
