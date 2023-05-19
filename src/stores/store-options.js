import { defineStore } from "pinia";
import apiStatic from "../utils/ApiStatic";

const SECTORS_URL = "/sectors.json";
const DOMICILE_URL = "/domicile.json"
const SERVICES_URL = "/services.json"
const TITLE_URL = "/title.json"
const ACCOR_CONSUL = "/data-accordion-konsultasi.json"
const BIDANG = "/data-bidang.json"

export const useOptionsStore = defineStore({
  id: "options",
  state: () => ({
    listSector: {},
    listDomicile: {},
    listService: {},
    listTitle: {},
    listAccorConsul: {},
    listBidang: []
  }),
  actions: {
    async getSectors(payload) {
      try {
        let res = await apiStatic.get(SECTORS_URL, payload);
        this.listSector = res;
      } catch (error) {}
    },
    async getDomiciles(payload) {
      try {
        let res = await apiStatic.get(DOMICILE_URL, payload);
        this.listDomicile = res;
      } catch (error) {}
    },
    async getServices(payload) {
      try {
        let res = await apiStatic.get(SERVICES_URL, payload);
        this.listService = res;
      } catch (error) {}
    },
    async getTitle(payload) {
      try {
        let res = await apiStatic.get(TITLE_URL, payload);
        this.listTitle = res;
      } catch (error) {}
    },
    async getAccorConsul(payload) {
      try {
        let res = await apiStatic.get(ACCOR_CONSUL, payload);
        this.listAccorConsul = res;
      } catch (error) {}
    },
    async getBidang(payload) {
      try {
        let res = await apiStatic.get(BIDANG, payload);
        this.listBidang = res;
      } catch (error) {}
    },
  },
});
