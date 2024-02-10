<script setup lang="ts">

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
      </div>
    </div>
  </Teleport>

</template>

<style scoped lang="scss">
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
}
</style>