<script setup lang="ts">
import AppSearchIcon from '@/components/icons/AppSearchIcon.vue';
import AppFavoriteIcon from '@/components/icons/AppFavoriteIcon.vue';
import AppAddIcon from '@/components/icons/AppAddIcon.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const searchText = ref('');

function addObject() {
    router.push({
        name: 'edit',
    })
}

function useSearchButton(text: string) {
    router.push({
        name: 'results',
        query: {
            q: text,
        }

    })
}

</script>

<template>
    <div class="container">
        <div class="void"></div>
        <div class="app-search-input">
            <input class="search-input" v-model="searchText"/>
            <button class="search-button" @click="useSearchButton(searchText)" role="button">
                <AppSearchIcon width="40" height="40" />
            </button>
        </div>

        <div class="icon-container">
            <AppFavoriteIcon width="48" height="48" class="app-icon app-icon__favorite" />
            <AppAddIcon width="48" height="48" class="app-icon" @click="addObject"/>
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
.app-icon:hover {
    cursor: pointer;
}
.app-icon__favorite:hover {
    color:rgb(190, 20, 20);
}
.container {
    display: grid; 
    gap: 104px;
    margin: 32px auto;
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
    padding: 0 16px;
    font-size: 16px;
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
    box-shadow: #9f9f9f 0 1px 3px;
}
.app-search-input:hover {
    box-shadow: #bbbbbb 0 4px 12px;
}
</style>