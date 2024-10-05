<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import AppSelectorModal from '../modals/AppSelectorModal.vue'
import type { AppSelectorItem } from './app-selector.types'

export interface AppSelectorProps {
  items: AppSelectorItem[]
  modelValue: AppSelectorItem | null
  label?: string
  column?: boolean
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
const props = withDefaults(defineProps<AppSelectorProps>(), { column: true })
const emit = defineEmits<AppSelectorEmits>()
const slots = useSlots()

const currentText = computed(() => props.modelValue?.name || props.label || 'Не выбрано')
const flexDirectionClass = computed(() =>
  props.column ? 'selector-block__column' : 'selector-block__row'
)
</script>

<template>
  <div class="app__selector-block" :class="flexDirectionClass">
    <label v-if="!!slots['label']" class="selector-block__label" :for="props.id">
      <slot name="label" />
    </label>
    <app-selector-modal :items="props.items" @select="emit('update:modelValue', $event)">
      <div :id="props.id" class="selector-block__current-value">
        <p>{{ currentText }}</p>
      </div>
    </app-selector-modal>
  </div>
</template>

<style lang="scss" scoped>
.selector-block__row {
  flex-direction: row;
  align-items: center;
}

.selector-block__column {
  flex-direction: column;
  align-items: flex-start;
}

.app__selector-block {
  display: flex;
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
