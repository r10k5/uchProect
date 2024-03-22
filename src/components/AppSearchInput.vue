<script setup lang="ts">
import AppSearchIcon from '@/components/icons/AppSearchIcon.vue';
import AppFavoriteIcon from '@/components/icons/AppFavoriteIcon.vue';
import AppCartIcon from '@/components/icons/AppCartIcon.vue';
import AppAddIcon from '@/components/icons/AppAddIcon.vue';

let isAddwindow:boolean = false;

function addObject() {
    isAddwindow = true;
}
</script>

<template>
    <div class="container">
        <div class="void"></div>
        <div class="app-search-input">
            <input class="search-input"/>
            <button class="search-button">
                <AppSearchIcon width="48" height="48" />
            </button>
        </div>

        <div class="icon-container">
            <AppFavoriteIcon width="48" height="48" class="app-icon" />
            <AppCartIcon width="48" height="48" class="app-icon" />
            <AppAddIcon width="48" height="48" class="app-icon" @click='addObject'/>
        </div>
    </div>
</template>

<style scoped>
.icon-container {
    display: flex;
    gap: 32px;
}
.app-icon {
    margin-top: 6px;
}
.container {
    display: grid; 
    gap: 104px;
    margin: 48px auto;
    padding: 0 32px;

    grid-template-columns: 1fr 1fr 1fr;
}
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
    height: 60px;
    width: 628px;
    border-radius: 10px;
    background-color: #E9E8E8;
    display: flex;
}
</style>