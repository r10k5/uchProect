<script setup lang="ts">
import { useCatalogeStore } from '@/stores/category.store';
import { computed } from 'vue';

const catalogStore = useCatalogeStore();
const catalogs = computed( () => catalogStore.cataloges)
</script>

<template>
   <router-link
    to="/edit"
    class="category-list-container">
        <div v-for="cataloge in catalogs" :key="cataloge.id" class="">
            {{cataloge.name}}
        </div>
    </router-link>
</template>

<style scoped setup lang="scss">
.category-list-container {
    background-color: rgb(200, 156, 156);
}
</style>