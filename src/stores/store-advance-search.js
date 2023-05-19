import { defineStore } from "pinia";
import api from "../utils/ApiStatic";
import { PAGINATION_LIMIT } from "../utils/Constants";

// const ADVANCE_SEARCH_URL = "/expert/search-expert";
const ADVANCE_SEARCH_URL = "/data-advance-search.json";

export const useAdvanceSearchStore = defineStore({
  id: "advanceSearch",
  state: () => ({
    experts: [],
    expertPagination: {
      per_page: PAGINATION_LIMIT,
      page: 1,
      total: 0,
    },
  }),
  actions: {
    async advanceSearch(payload) {
      try {
        let res = await api.post(ADVANCE_SEARCH_URL, payload);
        this.experts = res.data;
        this.expertPagination = res.data;
      } catch (error) {}
    },
    setPaginationCariExpert(payload) {
      this.expertPagination.page = payload.page;
      this.expertPagination.per_page = payload.per_page;
    },
  },
});
