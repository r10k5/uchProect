<script setup lang="ts">
import AppInput from '@/components/inputs/AppInput.vue';
import AppSelector from '@/components/inputs/AppSelector.vue';
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
const price = ref('0');


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
    fields: []
  });
}

const testSelector = [
  { id: 1, name: 'test' },
  { id: 2, name: 'test2' },
  { id: 3, name: 'test3' },
  { id: 4, name: 'test4' },
  { id: 5, name: 'test5' },
  { id: 6, name: 'test6' },
  { id: 7, name: 'test7' },
  { id: 8, name: 'test8' },
  { id: 9, name: 'test9' },
]
const selected = ref(null);
</script>

<template>
<div class="editor-container">
  <h1 class="editor-container__header">
    Добавление продукта
  </h1>
  <div class="form-container">
    <app-input v-model="name" id="name">
      <template #label>Название</template>
    </app-input>

    <div class="form-container__field">
      <AppSelector id="categories" :items="testSelector" v-model="selected">
        <template #label>Категория</template>
      </AppSelector>
    </div>

    <app-input v-model="description" id="description" type="long">
      <template #label>Описание</template>
    </app-input>

    <app-input v-model="price" id="price" type="number">
      <template #label>Стоимость</template>
    </app-input>
    
    <div class="form-container__field">
      <lable for="photo">Загрузить изображение</lable>
      <input id="photo" v-model="photo"/>
    </div>
    
    <app-input v-model="article" id="article">
      <template #label>Артикул</template>
    </app-input>

    <div v-for="(field, index) in fields" :key="index" class="form-container__field">
      <app-input v-model="field.name" :id="`field-name-${index}`">
        <template #label>Название поля</template>
      </app-input>
      <app-input v-model="field.value" :id="`field-value-${index}`">
        <template #label>Значение поля</template>
      </app-input>
      <app-input v-model="field.fieldType" :id="`field-type-${index}`">
        <template #label>Тип поля</template>
      </app-input>
    </div>

    <button type="button" @click="addField">Добавить поле</button>
    <button @click="addNewCard">Сохранить</button>
  </div>
</div>
</template>

<style scoped lang="scss">
.editor-container {
  width: 100%;
  padding: 0px 32px;

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