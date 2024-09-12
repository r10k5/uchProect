import { defineStore } from "pinia";
import cataloge from "@/assets/cataloge.json";
import type { Cataloge } from "@/services/types/cataloge.type";
import { computed, ref } from "vue";
import { api } from "@/services";
import _ from "lodash";

export const useCatalogeStore = defineStore("cataloge", () => {
    const cataloges = ref<Cataloge[]>(cataloge as Cataloge[]);
    const catalogesMap = computed(() => _.keyBy(cataloges.value, 'id'));
    
    const getCategories = async () => {
        cataloges.value = await api.categories.getCategories();
    }

    return {
        cataloges,
        getCategories,
        catalogesMap,
    }
})
