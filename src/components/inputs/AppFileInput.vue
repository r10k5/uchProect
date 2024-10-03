<script lang="ts" setup>
export interface AppInputProps {
  modelValue: File | null
  accept?: string
  id: string
}

export interface AppInputEmits {
  (e: 'update:modelValue', value: File): void
}

export interface AppSlots {
  default(): any
}

defineSlots<AppSlots>()
const emit = defineEmits<AppInputEmits>()
const props = defineProps<AppInputProps>()

const updateValue = (event: Event) => {
  const value = (event.target as HTMLInputElement).files?.[0]

  if (value) {
    emit('update:modelValue', value)
  }
}
</script>

<template>
  <div class="app__input-block" role="button">
    <label class="input-block__label" :for="props.id" role="button">
      <slot />
    </label>
    <input
      :id="props.id"
      hidden
      class="input-block__input"
      type="file"
      :accept="props.accept"
      :value="props.modelValue"
      @change="updateValue"
    />
  </div>
</template>

<style lang="scss" scoped>
.app__input-block {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #55a850;
  font-size: 16px;
  border-radius: 8px;
  padding: 8px 12px;
  max-width: 100%;
  min-height: 40px;
  min-width: 10rem;
  line-height: 1rem;
  color: #fff;
}
</style>
