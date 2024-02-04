<script setup lang="ts">
export interface AppBanerProps {
    image: string;
}

defineProps<AppBanerProps>();
</script>

<template>
    <img :src="image" class="app-baner" />
</template>

<style scoped>
.app-baner {
    height: 400px;
    width: 800px;
}
</style>