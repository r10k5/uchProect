<script setup lang="ts">
import AppSearchInput from '@/components/AppSearchInput.vue';
import AppBanerContainer from '@/components/AppBanerContainer.vue';
import AppInstitutionButton from '@/components/AppInstitutionButton.vue';
import AppCategoryButton from '@/components/AppCategoryButton.vue';
import AppCategoryName from '@/components/AppCategoryName.vue';
import AppProductCard from '@/components/AppProductCard.vue';
</script>

<template>
    <div class="home-container">
        <AppSearchInput />

        <AppBanerContainer />

        <div class="text-container">
            <p class="text-in-container">Подберем под бюджет</p>
            <p class="text-in-container">Бесплатно доставим</p>
            <p class="text-in-container">Соберем и установим</p>
        </div>

        <div class="header">
            <div class="header-catalog">
                <p class="header-text">Каталог</p>
            </div>
            <div class="header-info">
                <p class="header-text">Оплата и доставка</p>
                <p class="header-text">Контакты</p>
                <p class="header-text">О нас</p>
            </div>
        </div>

        <div class="button-container">
            <AppInstitutionButton> Для школ </AppInstitutionButton>
            <AppInstitutionButton> Все </AppInstitutionButton>
            <AppInstitutionButton> Для садиков </AppInstitutionButton>
        </div>

        <div class="category-container">
            <AppCategoryButton />
            <AppCategoryButton />
            <AppCategoryButton />
        </div>
        
        <AppCategoryName class="category-name"> Рекомендуем </AppCategoryName>

        <div class="product-card-container">
            <AppProductCard></AppProductCard>
        </div>
    </div>
</template>

<style scoped>
.product-card-container {
    margin: 32px 124px;
    display: flex;
    flex-shrink: 0;
    gap: 94px;
}
.category-name {
    margin: 32px 206px;
}
.category-container {
    height: 60px;
    flex-shrink: 0;
    margin: 64px 96px;
    background-color: aquamarine;
    display: flex;
    justify-content: center;
    gap: 42px; 
    /* по сетке 32+5+5*/
}
.button-container {
    margin-top: 64px;
    display: flex;
    justify-content: center;
    gap: 120px;
}
.header-info {
    display: flex;
    gap: 40px;
}
.header-text {
    font-size: 20px;
    color:rgb(22, 22, 22);
}
.header-catalog {
    margin-right: 40%;
}
.header {
    margin-top: 32px;
    justify-content: center;
    display: flex;
    flex-shrink: 0;
    border-bottom: 1px solid #d6d6d6;
    background: #F0F0F0;
}
.text-in-container {
    font-size: 16px;
    color:rgb(43, 43, 43);
}
.text-container {
    margin-top: 32px;
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 240px;
}
.home-container{
    display: block;
}

</style>