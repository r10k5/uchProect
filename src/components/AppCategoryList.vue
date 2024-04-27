<script setup lang="ts">
import { useCatalogeStore } from '@/stores/category.store';
import { computed } from 'vue';

const catalogStore = useCatalogeStore();
const catalogs = computed(() => catalogStore.cataloges);
const rootCatalogs = computed(
    () => catalogStore.cataloges.filter((catalog) => catalog.parent_id === null)
);

const getSubCategories = (categoryId: number) => {
    return catalogs.value.filter((cataloge) => cataloge.parent_id === categoryId);
}
</script>

<template>
   <router-link
    to="/edit"
    class="category-list-container">
        <div v-for="cataloge in rootCatalogs" :key="cataloge.id" class="category-list-container__text">
            <span>{{cataloge.name}}</span>
            <div class="category-list-container__sub-category">
                <span v-for="category in getSubCategories(cataloge.id)" :key="category.id">
                    {{ category.name }}
                </span>
            </div>
        </div>
    </router-link>
</template>

<style scoped setup lang="scss">
.category-list-container {
    background-color: rgb(200, 156, 156);
    &__text {
        font-size: 20px;
        margin-bottom: 4px;
    }
    &__sub-category {
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding-left: 1rem;
        font-size: 16px;
    }
}
</style>