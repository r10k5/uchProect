<script setup lang="ts">
import { useTemplateRef } from 'vue'
import type { AppSelectorItem } from '../inputs/app-selector.types'
import AppBaseModal from './AppBaseModal.vue'

export interface AppSelectorModalProps {
  items: AppSelectorItem[]
}

export interface AppSelectorModalSlots {
  default(): any
}

export interface AppSelectorModalEmits {
  (e: 'select', item: AppSelectorItem): void
}

const props = defineProps<AppSelectorModalProps>()
const selectorModal = useTemplateRef<InstanceType<typeof AppBaseModal>>('selector-modal')
const emit = defineEmits<AppSelectorModalEmits>()

const openModal = () => {
  selectorModal.value?.open()
}

const selectItem = (item: AppSelectorItem) => {
  emit('select', item)
  selectorModal.value?.close()
}
</script>

<template>
  <div @click="openModal">
    <slot />
    <app-base-modal ref="selector-modal" :show-close-button="false">
      <div
        v-for="item in props.items"
        :key="item.id.toString()"
        class="selector-modal__row"
        role="button"
        @click="selectItem(item)"
      >
        {{ item.name }}
      </div>
    </app-base-modal>
  </div>
</template>

<style lang="scss" scoped>
.selector-modal__row {
  padding: 16px;
  border-bottom: 1px solid #cfcfcf;
  background-color: transparent;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #cfcfcf;
  }
}
</style>
