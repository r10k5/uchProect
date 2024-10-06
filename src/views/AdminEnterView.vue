<script setup lang="ts">
import AppButton from '@/components/buttons/AppButton.vue'
import AppInput from '@/components/inputs/AppInput.vue'
import { api } from '@/services'
import { InvalidData } from '@/services/api/errors/invalid-data.error'
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const errorText = ref('')

const login = async () => {
  try {
    await api.authorize(username.value, password.value)
    errorText.value = ''
  } catch (e) {
    if (e instanceof InvalidData) {
      errorText.value = 'Неверное имя пользователя или пароль'
    } else {
      errorText.value = 'Неизвестная ошибка'
    }
  }
}
</script>

<template>
  <div class="admin-enter-view">
    <form class="admin-enter-view__form" @submit.prevent>
      <p v-if="errorText" class="admin-enter-view__error">{{ errorText }}</p>
      <app-input v-model="username" id="login">
        <template #label>Имя пользователя</template>
      </app-input>
      <app-input v-model="password" id="password" type="password">
        <template #label>Пароль</template>
      </app-input>
      <app-button @click="login">Войти</app-button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.admin-enter-view {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 0;
  width: 100%;

  &__form {
    width: 30vw;
    padding: 16px;
    border-radius: 10px;
    border: 3px solid #55a850;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__error {
    padding: 8px;
    background-color: #d20f3920;
    border-left: 3px solid #d20f39;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    color: #d20f39;
  }
}
</style>
