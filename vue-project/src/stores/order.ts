// stores/order.ts
import { defineStore } from 'pinia'
import axios from 'axios'

export const useOrderStore = defineStore('order', {
  actions: {
    async submitOrder(orderData: { name: string; phone: string; comment?: string }) {
      try {
        const response = await axios.post('/api/orders', orderData)
        return response.data
      } catch (error) {
        console.error('Ошибка при отправке заказа:', error)
        throw error
      }
    }
  }
})
