<script setup lang="ts">
import AppProductInCart from './AppProductInCart.vue';

export interface AppModalCartEmits{
  (e: 'close'): void;
}
const emit = defineEmits<AppModalCartEmits>();

const closeModalWindow = () => {
  emit('close');
}
</script>

<template>
  <Teleport to="#app-modals">
    <div class="app-modal_container">
      <div class="app-modal_window">
        <button class="app-modal_button" @click="closeModalWindow"> X </button>
        <AppProductInCart></AppProductInCart>
      </div>
    </div>
  </Teleport>

</template>

<style scoped lang="scss">
.app-modal_button {
  background-color: rgb(212, 213, 213);
  border: none;
  width: 32px;
  height: 32px;
  align-self: flex-end;
  margin-top: 16px;
  margin-right: 16px;
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