<script setup lang="ts">
import AppButton from '@/components/buttons/AppButton.vue'
import type { AppSelectorItem } from '@/components/inputs/app-selector.types'
import AppFileInput from '@/components/inputs/AppFileInput.vue'
import AppInput from '@/components/inputs/AppInput.vue'
import AppSelector from '@/components/inputs/AppSelector.vue'
import { api } from '@/services'
import type { Category } from '@/services/api/categories/types'
import { useCardsStore } from '@/stores/cards.store'
import { useCatalogeStore } from '@/stores/category.store'
import { computed, ref } from 'vue'

type FieldType = {
  fieldType: AppSelectorItem
  value: string
  name: string
}

const fields = ref<FieldType[]>([])
const possibleFields: AppSelectorItem[] = [
  {
    id: 'discount',
    name: 'Скидка'
  },
  {
    id: 'string',
    name: 'Строка'
  },
  {
    id: 'integer',
    name: 'Целое число'
  }
]

const description = ref('')
const photo = ref<File | null>(null)
const article = ref('')
const name = ref('')
const price = ref('0')

const categoriesStore = useCatalogeStore()

categoriesStore.getCategories()

const addField = () => {
  fields.value.push({
    fieldType: { id: 'integer', name: 'Целое число' },
    value: '',
    name: ''
  })
}

const cardsStore = useCardsStore()

const addNewCard = async () => {
  if (selectedCategory.value === null) {
    return
  }

  let file = undefined
  if (photo.value) {
    file = await api.files.upload(photo.value)
  }

  await api.products.createProduct({
    name: name.value,
    article: article.value,
    description: description.value,
    fields: [],
    price: price.value,
    photo: file,
    category_id: selectedCategory.value.id
  })
  // cardsStore.addCardLocal({
  //   id: Math.random(),
  //   name: name.value,
  //   price: price.value,
  //   article: article.value,
  //   photo: photo.value?.name ?? '',
  //   description: description.value,
  //   fields: []
  // });
}

const categories = computed(() => categoriesStore.cataloges)
const selectedCategory = ref<Category | null>(null)
</script>

<template>
  <div class="editor-container">
    <h1 class="editor-container__header">Добавление продукта</h1>
    <div class="form-container">
      <app-input v-model="name" id="name">
        <template #label>Название</template>
      </app-input>

      <div class="form-container__field">
        <app-selector id="categories" :items="categories" v-model="selectedCategory">
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
        <label for="photo">Изображение</label>
        <app-file-input v-model="photo" id="photo" type="file" accept="image/*">
          {{ photo?.name ?? 'Загрузить изображение' }}
        </app-file-input>
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
        <app-selector
          :id="`field-type-${index}`"
          :items="possibleFields"
          v-model="field.fieldType"
          column
        >
          <template #label>Тип поля</template>
        </app-selector>
      </div>

      <app-button type="secondary" @click="addField">Добавить поле</app-button>
      <app-button @click="addNewCard">Сохранить</app-button>
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
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__field {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>
