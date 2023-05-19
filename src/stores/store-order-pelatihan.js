import { defineStore } from "pinia";
import api from "../utils/Api";
import { PAGINATION_LIMIT } from "../utils/Constants";

const DATA_TABLE_TRAINING = "/expert/training/table"
const DATA_DETAIL_TRAINING = "/expert/training/detail/"
const SUBMISSION_TRAINING = "/expert/create-train"
const DAHSBOARD_NEW_TRANSACTION_TRAINING = "/dashboard/add"

export const useDataOrderPelatihanStore = defineStore({
  id: "order-pelatihan",
  state: () => ({
    tablePelatihan: [],
    detailPelatihan: {
      service: {
        training: {
          start_time: "00:00"
        }
      }
    },
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
    // ------------------------ Pelatihan -----------------------------
    async getDataTablePelatihan(payload) {
        try {
          let res = await api.get(DATA_TABLE_TRAINING + "?page=" + this.pagination.page + "&per_page=" + this.pagination.per_page + "&search=" + this.pagination.search, payload);
          this.tablePelatihan = res.data;
          this.pagination = res.pagination
        } catch (error) {}
    },
    async getDataDetailPelatihan(id) {
        try {
          let res = await api.get(DATA_DETAIL_TRAINING + id);
          this.detailPelatihan = res;
        } catch (error) {}
    },
    async formTambahTransaksiPelatihanDashboard(payload) {
        try {
          let newPayload = {
            "service":{"training":payload},
            "expert_id":payload.expert_id
          }
          await api.post(SUBMISSION_TRAINING, newPayload);
        } catch (error) {}
    },
    async formPengajuanPelatihan(payload) {
        try {
          let newPayload = {
            "service":{"training":payload},
            "expert_id":payload.expert_id
          }
          await api.post(SUBMISSION_TRAINING, newPayload);
        } catch (error) {}
    }
  }
});
