<script setup lang="ts">
import AppInput from '@/components/inputs/AppInput.vue';
import AppSelector from '@/components/inputs/AppSelector.vue';
import { useCardsStore } from '@/stores/cards.store';
import { useCatalogeStore } from '@/stores/category.store';
import { computed, ref } from 'vue';

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

const categoriesStore = useCatalogeStore();

categoriesStore.getCategories()

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

const categories = computed(
  () => categoriesStore.cataloges
)
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
      <app-selector id="categories" :items="categories" v-model="selected">
        <template #label>Категория</template>
      </app-selector>
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