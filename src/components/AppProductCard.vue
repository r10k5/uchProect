<template>
    <div class="app-card-container">
        <img class="app-card-image" src="@/components/icons/Table-test.png" />
        <!-- далее р заменить на slot -->
        <p class="app-product-price"> 8 599 руб </p>
        <p class="app-product-old-price"> 20 999 руб</p>
        <p class="app-product-name">Name</p>
        <div class="colors-box">
            <div class="colors-test" style="background-color: brown;"></div>
            <div class="colors-test" style="background-color: rgb(92, 61, 61);"></div>
        </div>
        <div class="add-cart-button">
            <p class="add-to-cart-text">В корзину</p>
        </div>
    </div>
</template>

<style scoped>
.add-to-cart-text {
    color:#4F901C;
}
.add-cart-button {
    width: 240px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #459927;
    background-color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 24px;
}
.colors-test {
    height: 32px;
    width: 32px;
}
.colors-box {
    height: 32px;
    width: 100%;
    margin: 12px 24px;
    display: flex;
    gap: 8px;
    flex-shrink: 0;
}
.app-product-name {
    margin: 8px 24px;
    color: #3D3C3C;
    font-size: 14px;
    font-weight: 700;
    }
.app-product-old-price {
    margin: 4px 24px;
    font-size: 12px;
    color: #3D3C3C;
    font-weight: 700;
    text-decoration: line-through;
}
.app-product-price {
    margin: 16px auto 0 24px;
    font-size: 24px;
    font-size: 24px;
    color: #4F901C;
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