<template>
    <button class="app-institution-button">
        <p> 
            <slot></slot>
        </p>
    </button>
</template>

<style scoped>
.app-institution-button {
    width: 400px;
    height: 100px;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 0px rgba(129, 129, 129, 0.25);

    font-size: 24px;
    background-color: transparent;
    border: none;
    outline: none;

    background-color: #E9E8E8;
    border-color: #E9E8E8;
}
</style>