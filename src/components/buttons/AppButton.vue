<script setup lang="ts">
import { computed } from 'vue'

export type AppButtonType = 'primary' | 'secondary'

export interface AppButtonProps {
  type?: AppButtonType
  blocked?: boolean
}

export interface AppButtonSlots {
  default(): any
}

const { type = 'primary', blocked = false } = defineProps<AppButtonProps>()
defineSlots<AppButtonSlots>()

const buttonClass = computed(() => `app-button__${type}`)
const blockedClass = computed(() => (blocked ? 'app-button__blocked' : ''))
</script>

<template>
  <button class="app-button" :class="[buttonClass, blockedClass]" role="button" :disabled="blocked">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@use 'sass:color';

.app-button {
  padding: 0 10px;
  min-height: 40px;
}

.app-button__primary {
  background-color: #55a850;
  color: #fff;
  border-radius: 8px;
  border: 2px solid transparent;
  font-size: 16px;

  &:hover {
    background-color: color.adjust(#55a850, $lightness: 5%);
  }
}

.app-button__secondary {
  background-color: #fff;
  color: #55a850;
  border-radius: 8px;
  border: 2px solid #55a850;
  font-size: 16px;

  &:hover {
    background-color: #55a850;
    color: #fff;
  }
}

.app-button__blocked {
  opacity: 0.75;
}
</style>
