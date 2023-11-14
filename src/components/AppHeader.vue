<script setup lang="ts">
import AppLogoIcon from '@/components/icons/AppLogoIcon.vue';
</script>

<template>
    <div class="app-header">
        <AppLogoIcon width="250" height="40" class="header-icon"/>
        <div class="header-info">
            <p>support@руруру.com</p>
            <p>+84809537065</p>
        </div>
    </div>
</template>

<style scoped>
.header-icon {
    flex-shrink: 0;
}
.header-info {
    gap: 32px;
    display: flex;
    justify-content: end;
    flex-grow: 1;
}
.app-header {
    width: 100%;
    background-color: #f3f3f3;

    display: flex;
    padding: 18px 96px;

    align-items: center;
}

</style>