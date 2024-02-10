import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore('appStore', () => {
  const isModalOpen = ref<boolean>(false);

  return {isModalOpen};
});
