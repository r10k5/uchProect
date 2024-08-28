<script setup lang="ts">
import { useCartStore } from '@/stores/cart.store';
import { computed } from 'vue';
import AppProductInCart from './AppProductInCart.vue';

export interface AppModalCartEmits {
  (e: 'close'): void;
}

const emit = defineEmits<AppModalCartEmits>();
const cartStore = useCartStore();

const closeModalWindow = () => {
  emit('close');
}

const price = computed(() => cartStore.totalPrice)
</script>

<template>
  <Teleport to="#app-modals">
    <div class="app-modal_container">
      <div class="app-modal_window">
        <button class="app-modal_button" @click="closeModalWindow" role="button"> X </button>
        <div class="app-modal__cart-header">
          <h3 class="cart-header__text">Корзина</h3>
        </div>
        <div class="app-modal__product-container">
          <AppProductInCart></AppProductInCart>
        </div>
        <div class="app-modal__modal-footer">
          <p class="">Итоговая стоимость: {{ price }}</p>
        </div>
      </div>
    </div>
  </Teleport>

</template>

<style scoped lang="scss">
.app-modal_button {
  background-color: rgb(255, 255, 255);
  border-radius: 100%;
  border: none;
  width: 32px;
  height: 32px;
  align-self: flex-end;
  margin-top: 16px;
  margin-right: 16px;
  flex-shrink: 0;
  font-weight: 900;
}

.app-modal__cart-header {
  display: flex;
  justify-content: center;
  align-items: center;

  .cart-header__text {
    font-size: 24px;
    line-height: 24px;
    margin: 0;
  }
}

.app-modal__product-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 100%;
  overflow-y: auto;
  margin: 8px;
}

.app-modal_container {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9000;
}

.app-modal_window {
  width: 1000px;
  height: 500px;
  background-color: rgb(237, 241, 241);
  border-radius: 24px;
  display: flex;
  flex-direction: column;

}
</style>