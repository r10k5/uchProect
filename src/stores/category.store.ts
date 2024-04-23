import { defineStore } from "pinia";
import cataloge from "@/assets/cataloge.json";
import type { Cataloge } from "@/services/types/cataloge.type";
import { ref } from "vue";

export const useCatalogeStore = defineStore("cataloge", () => {
    const cataloges = ref<Cataloge[]>(cataloge as Cataloge[]);
    return {
        cataloges,
    }
})
