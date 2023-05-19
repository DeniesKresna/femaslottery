import { defineStore } from "pinia";
import api from "../utils/Api";
import { PAGINATION_LIMIT } from "../utils/Constants";

const DATA_DETAIL_TABLE_USER = "/user/table-user"
const DELETE_TABLE_USER = "/user/"

export const useDataUserStore = defineStore({
  id: "users",
  state: () => ({
    tableUser: [],
    pagination: {
      search: "",
      per_page: PAGINATION_LIMIT,
      page: 1,
      total: 0,
    }
  }),
  actions: {
    setPagination(payload) {
      this.pagination = payload;
    },
    async getDataTableUser(){
      let res = await api.get(DATA_DETAIL_TABLE_USER + "?page=" + this.pagination.page + "&per_page=" + this.pagination.per_page)
      this.tableUser = res.data
      this.pagination = res.pagination
    },
    async deleteDataTableUser(id) {
      try {
        await api.delete(DELETE_TABLE_USER + id);
      } catch (error) {}
    }
  },
});
