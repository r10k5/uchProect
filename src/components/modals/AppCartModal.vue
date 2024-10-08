<script setup lang="ts">
import { useCartStore } from '@/stores/cart.store'
import { computed, useTemplateRef, watch } from 'vue'
import AppProductInCart from '../AppProductInCart.vue'
import AppBaseModal from './AppBaseModal.vue'

export interface AppCartModalProps {
  modelValue: boolean
}

export interface AppCartModalEmits {
  (e: 'update:modelValue', value: boolean): void
}

const { modelValue } = defineProps<AppCartModalProps>()
const emit = defineEmits<AppCartModalEmits>()
const cartStore = useCartStore()

const modal = useTemplateRef<InstanceType<typeof AppBaseModal>>('cart-modal')

const price = computed(() => cartStore.totalPrice)

const onClose = () => {
  emit('update:modelValue', false)
}

watch(() => modelValue, (value) => {
  if (!modal.value) {
    return
  }
  
  if (value && !modal.value.isOpen) {
    modal.value.open()
  }
})
</script>

<template>
  <app-base-modal ref="cart-modal" @close="onClose">
    <template #header>
      <h3>Корзина</h3>
    </template>

    <div class="cart-modal__product-container">
      <app-product-in-cart></app-product-in-cart>
      <p>Итоговая стоимость: {{ price }}</p>
    </div>
  </app-base-modal>
</template>

<style lang="scss" scoped>
.cart-modal__product-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
