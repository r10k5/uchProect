<script setup lang="ts">
import AppSearchInput from '@/components/AppSearchInput.vue';
import AppBanerContainer from '@/components/AppBanerContainer.vue';
import AppInstitutionButton from '@/components/AppInstitutionButton.vue';
import AppCategoryButton from '@/components/AppCategoryButton.vue';
import AppCategoryName from '@/components/AppCategoryName.vue';
import AppProductCard from '@/components/AppProductCard.vue';
import AppProductCardTemp from '@/components/AppProductCardTemp.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppCartIcon from '@/components/icons/AppCartIcon.vue';
import { useCardsStore } from '@/stores/cards.store';
import AppModalCart from '@/components/AppModalCart.vue';
import { ref } from 'vue';

const cardsStore = useCardsStore();
const cartIsOpen = ref(false);

const openModalCart = () => {
    cartIsOpen.value = true;
    return cartIsOpen;
}

const closeModalCart = () => {
    cartIsOpen.value = false;
    return cartIsOpen;
}

</script>

<template>
    <div class="home-container">
        <AppModalCart class="home-modal_cart" v-if="cartIsOpen === true" @close="closeModalCart"/>

        <div class="home-container__cart">
            <AppCartIcon @click="openModalCart"></AppCartIcon>
        </div>

        <AppSearchInput />

        <AppBanerContainer />

        <div class="feature-container">
            <p class="text-in-container" >Подберем под бюджет</p>
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
            <AppInstitutionButton> Ремонтные работы и отделка </AppInstitutionButton>
            <AppInstitutionButton> Для садиков </AppInstitutionButton>
        </div>

        <div class="category-container">
            <AppCategoryButton />
            <AppCategoryButton />
            <AppCategoryButton />
        </div>
        
        <AppCategoryName class="category-name"> Рекомендуем </AppCategoryName>

        <div class="product-card-container">
            <AppProductCardTemp></AppProductCardTemp>
            <AppProductCard v-for="card in cardsStore.cards" :key="card.id" :card="card"></AppProductCard>
        </div>
        <AppFooter/>
    </div>
</template>

<style scoped>
.home-container__cart {
    height: 60px;
    width: 60px;
    padding: 12px;
    position: fixed;
    background-color: #FBFBFB;
    border-radius: 40px;
    right: 80px;
    bottom: 40px;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
    z-index: 999;
}
.product-card-container {
    margin: 32px 124px;
    display: grid;
    grid-template-columns: repeat(4, max-content);
    flex-shrink: 0;
    column-gap: 80px;
    row-gap: 32px;
    justify-content: center;
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

.text-in-container:hover {
    text-decoration: underline;
    color: #58ad17;
    font-weight: 700;
}

.feature-container {
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