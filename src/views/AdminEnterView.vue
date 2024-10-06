<script setup lang="ts">
import AppButton from '@/components/buttons/AppButton.vue';
import AppInput from '@/components/inputs/AppInput.vue';
import { api } from '@/services';
import { ref } from 'vue';


const username = ref('');
const password = ref('');

const login = async () => {
  api.authorize(username.value, password.value);
}
</script>

<template>
  <div class="admin-enter-view">
    <div class="admin-enter-view__form">
      <app-input v-model="username" id="login">
        <template #label>Имя пользователя</template>
      </app-input>
      <app-input v-model="password" id="password" type="password">
        <template #label>Пароль</template>
      </app-input>
      <app-button @click="login">Войти</app-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.admin-enter-view {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  &__form {
    width: 30vw;
    padding: 16px;
    border-radius: 10px;
    border: 3px solid #57c757;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}
</style>