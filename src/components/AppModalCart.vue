<script setup lang="ts">

</script>

<template>
  <div class="app-modal_container">
    <div class="app-modal_window">
      <button class="app-modal_button">
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-modal_container {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);

}
.app-modal_window {
  width: 1000px;
  height: 500px;
  background-color: rgb(237, 241, 241);
  border-radius: 24px;
  z-index: 999;

  position: fixed;
  top: 20%;
  left: 25%;
}
</style>