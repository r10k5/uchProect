<script setup lang="ts">
import AppSearchInput from '@/components/AppSearchInput.vue';
</script>

<template>
    <div class="home-container">
        <AppSearchInput class="search-input-home"/>
    </div>
</template>

<style scoped>
.home-container{
    display: flex;
}
.search-input-home {
    margin: 48px auto;
}
</style>