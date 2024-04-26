<script setup lang="ts">
import type { Product } from '@/services/types/cards.types';
import { useCardsStore } from '@/stores/cards.store';
import { ref } from 'vue';

type FieldType = {
  fieldType: 'number' | 'string',
  value: string,
  name: string,
}

const fields = ref<FieldType[]>([]);

const description = ref('');
const photo = ref('');
const article = ref('');
const name = ref('');
const price = ref(0);


const addField = () => {
  fields.value.push({
    fieldType: 'number',
    value: '',
    name: '',
  })
}

const cardsStore = useCardsStore();

const addNewCard = () => {
  cardsStore.addCardLocal({
    id: Math.random(),
    name: name.value,
    price: price.value,
    article: article.value,
    photo: photo.value,
    description: description.value,
  });
}
</script>

<template>
<div class="editor-container">
  <h1 class="editor-container__header">
    Добавление продукта
  </h1>
  <div class="form-container">
    <div class="form-container__field">
      <lable for="name">Название:</lable>
      <input id="name" v-model="name" />
    </div>

    <div class="form-container__field">
      <lable for="category">Категория:</lable>
      <input id="category" />
    </div>
    
    <div class="form-container__field">
      <lable for="description">Описание:</lable>
      <input id="description" v-model="description"/>
    </div>

    <div class="form-container__field">
      <lable for="price">Стоимость:</lable>
      <input id="price" v-model="price"/>
    </div>
    
    <div class="form-container__field">
      <lable for="photo">Загрузить изображение</lable>
      <input id="photo" v-model="photo"/>
    </div>
    
    <div class="form-container__field">
      <lable for="article">Артикул:</lable>
      <input id="article" v-model="article"/>
    </div>

    <div v-for="(field, index) in fields" :key="index" class="form-container__field">
      <lable>Название поля</lable>
      <input v-model="field.name"/>
      <lable>Значение поля</lable>
      <input v-model="field.value"/>
      <lable>Тип поля</lable>
      <input v-model="field.fieldType"/>
    </div>

    <button type="button" @click="addField">Добавить поле</button>
    <button @click="addNewCard">Сохранить</button>
  </div>
</div>
</template>

<style scoped lang="scss">
.editor-container {
  width: 100%;

  &__header {
    font-size: 20px;
  }
}
.form-container {
  display:flex;
  flex-direction: column;
  gap: 16px;
  &__field {
    display: flex;
    gap: 8px;
  }
}

</style>