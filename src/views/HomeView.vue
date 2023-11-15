<script setup lang="ts">
import AppSearchInput from '@/components/AppSearchInput.vue';
import AppBanerContainer from '@/components/AppBanerContainer.vue';
</script>

<template>
    <div class="home-container">
        <AppSearchInput />
        <AppBanerContainer />
    </div>
</template>

<style scoped>
.home-container{
    display: block;
}

</style>