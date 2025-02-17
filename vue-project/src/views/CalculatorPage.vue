<template>
  <div class="calculator">
    <h2>Калькулятор стоимости</h2>
    <form @submit.prevent="calculate">
      <label>
        Тип дома:
        <select v-model="selectedType">
          <option value="каркасный">Каркасный</option>
          <option value="кирпичный">Кирпичный</option>
        </select>
      </label>
      <label>
        Площадь (м²):
        <input v-model="area" type="number" min="50" max="500">
      </label>
      <label>
        Дополнительные услуги:
        <div class="services">
          <label v-for="service in additionalServices" :key="service.name">
            <input type="checkbox" v-model="selectedServices" :value="service.name">
            {{ service.name }} ({{ service.price }} руб.)
          </label>
        </div>
      </label>
      <button type="submit">Рассчитать</button>
    </form>
    <div v-if="totalPrice" class="result">
      Итоговая стоимость: {{ totalPrice }} руб.
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedType = ref('каркасный')
const area = ref(100)
const additionalServices = ref([
  { name: 'Выравнивание участка', price: 50000 },
  { name: 'Вывоз мусора', price: 20000 }
])
const selectedServices = ref<string[]>([])
const totalPrice = ref<number | null>(null)

const calculate = () => {
  const basePrice = selectedType.value === 'каркасный' ? 10000 : 15000
  const servicesPrice = selectedServices.value.reduce((sum, serviceName) => {
    const service = additionalServices.value.find(s => s.name === serviceName)
    return sum + (service?.price || 0)
  }, 0)
  totalPrice.value = basePrice * area.value + servicesPrice
}
</script>

<style scoped>
.calculator {
  max-width: 600px;
  margin: 0 auto;
}

.services {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.result {
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
