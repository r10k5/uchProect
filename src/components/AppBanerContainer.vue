<script setup lang="ts">
import { ref, onUnmounted } from 'vue';
import AppBaner from './AppBaner.vue';

const imagePack = ref([
    'https://img.freepik.com/free-photo/buckets-of-paint-on-the-floor_53876-63280.jpg?w=1380&t=st=1700084949~exp=1700085549~hmac=d3445817e07e74f27e5707558f2f334fb9f7c1f3a019bc1e16d2f6dd8d45322a',
    'https://img.freepik.com/free-photo/safety-tools-for-painting-work_23-2148908402.jpg?w=1380&t=st=1700084987~exp=1700085587~hmac=baa93afe8f1c84fa6b76f893ab03df7fe4aa63e2eca440d710e87fe1b19cb101',
    'https://img.freepik.com/free-photo/flat-lay-yellow-tools-with-copy-space_23-2148393056.jpg?w=1380&t=st=1700085003~exp=1700085603~hmac=c630dccb8c6da1caeb2d51a20c095f915842066eb9ea5e4d36d44f6c3efdceaa',
]);

function nextBanner() {
    imagePack.value.push(imagePack.value.shift() as string)
}

const timerId = setInterval(nextBanner, 8000);

function removeTimer() {
    clearInterval(timerId);
}

onUnmounted(removeTimer);
</script>

<template>
    <TransitionGroup name="banners" tag="div" class="app-baner-container">
        <AppBaner v-for="(image, index) in imagePack" :key="index" :image="image" class="app-baner" />
    </TransitionGroup>
</template>

<style scoped>
.app-baner {
    flex-shrink: 0;
}
.app-baner-container {
    display: flex;
    gap: 64px;
    width: 100%;
    height: 400px;
    overflow: hidden;
    justify-content: center;
}

.banners-move,
.banners-enter-active,
.banners-leave-active {
  transition: all 0.5s ease;
}

.banners-enter-from,
.banners-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.banners-leave-active {
  position: absolute;
}
</style>