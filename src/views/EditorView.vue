<script setup lang="ts">
import { ref } from 'vue';
type FieldType = {
  fieldType: 'number' | 'string',
  value: string,
  name: string,
}
const fields = ref<FieldType[]>([]);
const addField = () => {
  fields.value.push({
    fieldType: 'number',
    value: '',
    name: '',
  })
}
</script>

<template>
<div class="editor-container">
  <h1 class="editor-container__header">
    Добавление продукта
  </h1>
  <form class="form-container">
    <div class="form-container__field">
      <lable for="name">Название:</lable>
      <input id="name"/>
    </div>
    
    <div class="form-container__field">
      <lable for="description">Описание:</lable>
      <input id="description"/>
    </div>

    <div class="form-container__field">
      <lable for="price">Стоимость:</lable>
      <input id="price"/>
    </div>
    
    <div class="form-container__field">
      <lable for="photo">Загрузить изображение</lable>
      <input id="photo"/>
    </div>
    
    <div class="form-container__field">
      <lable for="article">Артикул:</lable>
      <input id="article"/>
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
    <button>Сохранить</button>
  </form>
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