<script setup lang="ts">
</script>

<template>
  <div class="app-footer">
    <div class="app-footer-pagination">
      <button> ← </button>
      <button> 1 </button>
      <button> 2 </button>
      <button> ... </button>
      <button> end </button>
      <button> → </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-footer {
  height: 40px;
  width: 100%;
  box-shadow: 0px -4px 4px rgb(0, 0, 0, 0.1);

  &-pagination {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }
}

</style>