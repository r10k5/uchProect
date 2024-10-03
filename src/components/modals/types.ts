import type { ComputedRef } from "vue";

export interface ModalManager {
  open: () => void;
  close: () => void;
  isOpen: ComputedRef<boolean>;
}