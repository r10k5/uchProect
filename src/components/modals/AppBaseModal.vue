<script setup lang="ts">
import { computed, ref, useSlots } from 'vue'
import AppCrossIcon from '../icons/AppCrossIcon.vue'
import type { ModalManager } from './types'

export interface AppBaseModalProps {
  isOpen?: boolean
  showCloseButton?: boolean
  closeOnClickOutside?: boolean
}

export interface AppBaseModalSlots {
  default(manager: ModalManager): any
  additional(manager: ModalManager): any
  header(manager: ModalManager): any
}

export interface AppBaseModalEmits {
  (e: 'close'): void
  (e: 'open'): void
}

const {
  isOpen: propsIsOpen = false,
  showCloseButton = true,
  closeOnClickOutside = true
} = defineProps<AppBaseModalProps>()
const emit = defineEmits<AppBaseModalEmits>()

defineSlots<AppBaseModalSlots>()

const slots = useSlots()

const isOpen = ref(propsIsOpen)

const computedIsActive = computed(() => isOpen.value)

const openModal = () => {
  isOpen.value = true
  emit('open')
}

const closeModal = () => {
  isOpen.value = false
  emit('close')
}

const clickOutside = () => {
  if (closeOnClickOutside) {
    closeModal()
  }
}

const manager: ModalManager = {
  open: openModal,
  close: closeModal,
  isOpen: computedIsActive
}

defineExpose(manager)
</script>

<template>
  <Teleport to="#app-modals">
    <Transition name="app-modal-animation">
      <div v-if="isOpen" class="app-modal__container" @click="clickOutside">
        <div class="app-modal__window">
          <div v-if="showCloseButton || !!slots['header']" class="modal-window__header">
            <div class="modal-header__title">
              <slot name="header" v-bind="manager" />
            </div>
            <button
              v-if="showCloseButton"
              class="modal-header__close-button"
              @click="closeModal"
              role="button"
            >
              <AppCrossIcon width="24px" height="24px" />
            </button>
          </div>

          <div class="app-modal__content">
            <slot v-bind="manager" />
          </div>

          <slot name="additional" v-bind="manager" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped lang="scss">
.app-modal-animation-enter-active {
  animation: bounce-in 0.5s;
}
.app-modal-animation-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.app-modal__container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  overflow: hidden;
}

.app-modal__content {
  max-height: 100%;
  overflow-y: auto;
}

.app-modal__window {
  overflow: hidden;
  position: relative;

  .modal-window__header {
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 8px;
    max-height: 40px;
    box-sizing: content-box;
    overflow: hidden;

    .modal-header__title {
      flex-grow: 1;
    }

    .modal-header__close-button {
      flex-grow: 0;
      border: none;
      outline: none;
      border-radius: 100%;
      background-color: transparent;
      width: 40px;
      height: 40px;
      line-height: 0;

      &:hover {
        background-color: #cfcfcf;
      }
    }
  }
}

.app-modal__window {
  min-width: 450px;
  max-height: 80%;
  background-color: rgb(237, 241, 241);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
}
</style>
