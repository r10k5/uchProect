<script lang="ts" setup>
import { useSlots } from 'vue'

export interface AppInputProps {
  placeholder?: string
  modelValue: string
  id: string
  type?: string
}

export interface AppInputEmits {
  (e: 'update:modelValue', value: string): void
}

export interface AppSlots {
  default(): any

  label(): any
}

defineSlots<AppSlots>()
const emit = defineEmits<AppInputEmits>()
const props = withDefaults(defineProps<AppInputProps>(), {
  type: 'text'
})
const slots = useSlots()

const updateValue = (event: Event) => {
  const value = (event.target as HTMLInputElement).value
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="app__input-block">
    <label v-if="!!slots['label']" class="input-block__label" :for="props.id">
      <slot name="label" />
    </label>
    <input
      v-if="props.type !== 'long'"
      :id="props.id"
      class="input-block__input"
      :type="props.type"
      :value="props.modelValue"
      @input="updateValue"
      :placeholder="props.placeholder"
    />
    <textarea
      v-else
      class="input-block__input"
      @input="updateValue"
      :id="props.id"
      :value="props.modelValue"
      :placeholder="props.placeholder"
    />
  </div>
</template>

<style lang="scss" scoped>
.app__input-block {
  display: flex;
  flex-direction: column;
  gap: 4px;

  .input-block__input {
    border: 2px solid #55a850;
    font-size: 16px;
    border-radius: 8px;
    padding: 8px 12px;
    max-width: 100%;
    min-height: 40px;
    min-width: 10rem;
    line-height: 1rem;
  }
}
</style>
