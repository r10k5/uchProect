<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import AppSelectorModal from '../modals/AppSelectorModal.vue'
import type { AppSelectorItem } from './app-selector.types'

export interface AppSelectorProps {
  items: AppSelectorItem[]
  modelValue: AppSelectorItem | null
  label?: string
  id: string
}

export interface AppSlots {
  default(): any

  label(): any
}

export interface AppSelectorEmits {
  (e: 'update:modelValue', value: AppSelectorItem): void
}

defineSlots<AppSlots>()
const props = defineProps<AppSelectorProps>()
const emit = defineEmits<AppSelectorEmits>()
const slots = useSlots()

const currentText = computed(() => props.modelValue?.name || props.label || 'Не выбрано')
</script>

<template>
  <div class="app__selector-block">
    <label v-if="!!slots['label']" class="selector-block__label">
      <slot name="label" :for="props.id" />
    </label>
    <app-selector-modal :items="props.items" @select="emit('update:modelValue', $event)">
      <div :id="props.id" class="selector-block__current-value">
        <p>{{ currentText }}</p>
      </div>
    </app-selector-modal>
  </div>
</template>

<style lang="scss">
.app__selector-block {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;

  .selector-block__current-value {
    border: 2px solid #55a850;
    cursor: pointer;
    padding: 0 16px;
    display: flex;
    align-items: center;
    font-size: 16px;
    border-radius: 8px;
    line-height: 1rem;
    min-height: 40px;

    p {
      margin: 0;
    }
  }
}
</style>
