<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const searchText = computed(() => route.query.q ?? "");
</script>

<template>
    <div>
        <p >Результат по запросу: "{{ searchText }}" </p>
    </div>
</template>

<style>

</style>