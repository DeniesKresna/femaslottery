import { defineStore } from "pinia";
import api from "../utils/Api";

const INDEX_EXPERT_URL = "/expert-featured.json";

export const useDataExpertsHomepageStore = defineStore({
  id: "dataExpertsHomepage",
  state: () => ({
    experts: [],
  }),
  actions: {
    setDataExperts(payload = {}) {
      this.experts = payload;
    },
    async getDataExperts() {
      try {
        let res = await api.get(INDEX_EXPERT_URL);
        this.experts = res.data;
      } catch (error) {}
    },
  },
});
