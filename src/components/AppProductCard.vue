<template>
    <div class="app-card-container">
        <img class="app-card-image" src="@/components/icons/Table-test.png" />
        <!-- далее р заменить на slot -->
        <p class="app-product-price"> 8 599 руб </p>
        <p class="app-product-old-price"> 20 999 руб</p>
    </div>
</template>

<style scoped>
.app-product-old-price {
    margin: 4px 24px;

    font-size: 12px;
    color: #3D3C3C;
    font-family: Inter;
    font-weight: 700;
    text-decoration: line-through;
}
.app-product-price {
    margin: 16px auto 0 24px;

    font-size: 24px;
    font-size: 24px;
    color: #4F901C;
    font-family: Inter;
    font-weight: 700;
}
.app-card-image {
    margin: 16px 24px;
    flex-shrink: 0;
}
.app-card-container { 
    height: 472px;
    width: 288px;
    border-radius: 10px;
    box-shadow:1px 1px 4px rgba(0, 0, 0, 0.25);
}
</style>