<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal">
      <h3>Заказать обратный звонок</h3>
      <form @submit.prevent="submitForm">
        <label>
          Ваше имя:
          <input v-model="name" required>
        </label>
        <label>
          Телефон:
          <input v-model="phone" type="tel" required>
        </label>
        <label>
          Комментарий:
          <textarea v-model="comment"></textarea>
        </label>
        <button type="submit">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useOrderStore } from '@/stores/order'

const emit = defineEmits(['close'])

const name = ref('')
const phone = ref('')
const comment = ref('')

const orderStore = useOrderStore()

const submitForm = async () => {
  await orderStore.submitOrder({
    name: name.value,
    phone: phone.value,
    comment: comment.value
  })
  closeModal()
}

const closeModal = () => {
  emit('close')
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
}

label {
  display: block;
  margin-bottom: 1rem;
}

input, textarea {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
}
</style>
