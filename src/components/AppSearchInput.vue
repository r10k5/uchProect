<script setup lang="ts">
import AppSearchIcon from '@/components/icons/AppSearchIcon.vue';
</script>

<template>
    <div class="app-search-input">
        <input class="search-input"/>
        <button class="search-button">
            <AppSearchIcon width="48" height="48" />
        </button>
    </div>
</template>

<style scoped>
.search-input, .search-button {
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
}
.search-input{
    padding: 0 12px;
}
.search-button {
    width: 112px;
    border-left: 1px solid rgba(150, 147, 147, 0.40);
    padding: 0;
}
.app-search-input {
    height: 80px;
    width: 628px;
    border-radius: 10px;
    background-color: #E9E8E8;

    display: flex;
}
</style>