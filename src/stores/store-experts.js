import { defineStore } from "pinia";
import api from "../utils/Api";
import apiStatic from "../utils/ApiStatic";
import { PAGINATION_LIMIT } from "../utils/Constants";
import {PAGINATION_LIMIT_ADVANCE_SEARCH} from "../pages/Experts/CariExpert/Constant"

//------ url data detail expert -----------------------------------
// const DETAIL_EXPERT_URL = "/detail-experts.json";
const DETAIL_EXPERT_URL = "/expert/expert-profile/";
//------ url rekomendasi expert ------------------------------------
// const INDEX_EXPERT_FEATURED_URL = "/expert-featured.json";
const INDEX_EXPERT_FEATURED_URL = "/expert/expert-features";
//------ url cari expert -------------------------------------------
// const ADVANCE_SEARCH_URL = "/data-advance-search.json";
const ADVANCE_SEARCH_URL = "/expert/search-expert";
//------ url form expert -------------------------------------------
const JADI_EXPERT_URL = "/expert/create-expert-form"
//------ url data expert temporary ---------------------------------
const SUBMISSION_EXPERT_TEMP = "/expert/submission-expert-temp"
// const SUBMISSION_EXPERT_TEMP = "/submission-expert-temp.json"
// const SUBMISSION_TABLE_EXPERT_TEMP = "/expert/submission-expert-temp"
const SUBMISSION_TABLE_EXPERT_TEMP = "/table-expert-temp.json"
const DELETE_SUBMISSION_TABLE_EXPERT_TEMP = "/expert/delete-expert-temp"
const ACCEPT_REJECT_SUBMISSION_TABLE_EXPERT_TEMP = "/expert/status-expert-temp"
//------ url data expert permanent ----------------------------------
const JADI_EXPERT_DASHBOARD_URL = "/expert/create-expert"
const DATA_DETAIL_EXPERT_PERMANENT = "/expert/submission-expert-temp"
// const DATA_DETAIL_TABLE_EXPERT_PERMANENT = "/expert/table-expert-permanent"
const DATA_DETAIL_TABLE_EXPERT_PERMANENT = "/table-expert-temp.json"
const DELETE_TABLE_EXPERT_PERMANENT = "/expert/delete-expert-perm"
const EDIT_TABLE_EXPERT_PERMANENT = "/expert/edit-detail-expert"
const ACCEPT_TABLE_EXPERT_PERMANENT = "/expert/acc-expert-temp"
const PUBLISH_TABLE_EXPERT_PERMANENT = "/expert/publish-expert"
const LIST_PUBLISHED_EXPERT = "/expert/list-published-expert"
// ------ User ------------------------------------------------------
const TABLE_USER = "/user/table"
const EDIT_USER = "/user/edit"
const DELETE_USER = "/user/delete"
const CREATE_USER = "/user/add"
const STATUS_USER = "/expert/publish-expert"
const EMAIL_VERIFICATION = "/user/email-verification"
const TRANSACTION_USER = "/user/transaction-history"
// ------ Konsultasi ------------------------------------------------
// const DATA_TABLE_CONSULTATION = "/consultation/table"
const DATA_TABLE_CONSULTATION = "/table-expert-dummy.json"
const DATA_DETAIL_CONSULTATION = "/consultation/detail"
const SUBMISSION_CONSULTATION = "/expert/add"
const DASHBOARD_NEW_TRANSACTION_CONSULTATION = "/dashboard/create-consul"
// ------ Recruit Expert --------------------------------------------
// const DATA_TABLE_RECRUIT_EXPERT = "/recruit-expert/table"
const DATA_TABLE_RECRUIT_EXPERT = "/table-expert-dummy.json"
const DATA_DETAIL_RECRUIT_EXPERT = "/recruit-expert/detail"
const SUBMISSION_RECRUIT_EXPERT = "/expert/create-recruit"
const DAHSBOARD_NEW_TRANSACTION_RECRUIT_EXPERT = "/dashboard/add"
// ------ Undang Expert --------------------------------------------
// const DATA_TABLE_INVITE_EXPERT = "/invite-expert/table" 
const DATA_TABLE_INVITE_EXPERT = "/table-expert-dummy.json"
const DATA_DETAIL_INVITE_EXPERT = "/invite-expert/detail"
const SUBMISSION_INVITE_EXPERT = "/expert/create-invite"
const DAHSBOARD_NEW_TRANSACTION_INVITE_EXPERT = "/dashboard/add"
// ------ Kebutuhan Expert -------------------------------------------------
const SUBMISSION_EXPERT_NEEDED = "/expert/create-request-expert"



export const useDataExpertStore = defineStore({
  id: "experts",
  state: () => ({
    detailExpert: {
      education: {},
      social_media: {},
    },
    detailTransactionUser: {
        per_page: PAGINATION_LIMIT,
        page: 1,
        total: 0,
    },
    expertAdvanceSearch: [],
    expertPaginationAdvanceSearch: {
      search: "",
      per_page: PAGINATION_LIMIT_ADVANCE_SEARCH,
      page: 1,
      total: 0,
    },
    expertFeatured: [],
    expertPermanent: {
      education: {},
      social_media: {},
    },
    submissionExpertTemp: {
      education: {},
      social_media: {},
    },
    tableExpertPermanent: {
        search: "",
        per_page: PAGINATION_LIMIT,
        page: 1,
        total: 0,
    },
    tableSubmissionExpertTemp: [],
    tableUser: {
      search: "",
        per_page: PAGINATION_LIMIT,
        page: 1,
        total: 0,
    },
    pagination: {
      search: "",
      per_page: PAGINATION_LIMIT,
      page: 1,
      total: 0,
    },
    tableConsultation: {
      search: "",
      per_page: PAGINATION_LIMIT,
      page: 1,
      total: 0,
    },
    tableRecruitExpert: {
      search: "",
      per_page: PAGINATION_LIMIT,
      page: 1,
      total: 0,
    },
    tableInviteExpert: {
      search: "",
      per_page: PAGINATION_LIMIT,
      page: 1,
      total: 0,
    },
    tablePelatihan: {
      search: "",
      per_page: PAGINATION_LIMIT,
      page: 1,
      total: 0,
    },
    detailPelatihan: {
      education: {},
      social_media: {},
    },
    detailRecruitExpert: {
      education: {},
      social_media: {},
    },
    detailUndangExpert: {
      education: {},
      social_media: {},
    }
  }),
  actions: {
    //---- Page Detail Expert -------------------------------
    setDetailDataExpert(payload = {}) {
      this.detailExpert = payload;
    },
    async getDataDetailExpert(id) {
      try {
        let res = await api.get(DETAIL_EXPERT_URL + id);
        this.detailExpert = res;
      } catch (error) {
        console.log("error");
      }
    },
    //------- Page Cari Expert ------------------------------
    async advanceSearch(payload) {
      try {
        let res = await api.post(ADVANCE_SEARCH_URL + "?page=" + this.expertPaginationAdvanceSearch.page + "&per_page=" + this.expertPaginationAdvanceSearch.per_page + "&search=" + this.expertPaginationAdvanceSearch.search, payload);
        this.expertAdvanceSearch = res.data;
        this.setPaginationCariExpert(res.pagination)
        //this.expertPaginationAdvanceSearch = res.pagination;
      } catch (error) {}
    },
    setPaginationCariExpert(payload) {
      this.expertPaginationAdvanceSearch.page = payload.page
      this.expertPaginationAdvanceSearch.per_page = payload.per_page
      this.expertPaginationAdvanceSearch.search = payload.search
      this.expertPaginationAdvanceSearch.total = payload.total
    },
    //------- Expert Rekomendasi Homepage -------------------
    setDataExpertFeatured(payload = {}) {
      this.expertFeatured = payload;
    },
    async getDataExpertFeatured() {
      try {
        let res = await api.get(INDEX_EXPERT_FEATURED_URL);
        this.expertFeatured = res.data;
      } catch (error) {}
    },
    //------- Page Formulir Jadi Expert ---------------------
    async formJadiExpert(payload) {
      let newSectors = payload.sectors.map((obj)=> obj.value)
      payload.sectors = newSectors
      let newAvailableServices = payload.available_services.map((obj)=> obj.value)
      payload.available_services = newAvailableServices
      try {
        console.log(payload)
        let res = await api.post(JADI_EXPERT_URL, payload);
        this.formJadiExpert = res.data;
      } catch (error) {}
    },
    //------- Page Formulir Jadi Expert Permanent Dashboard --------
    async formJadiExpertDashboard(payload) {
      try {
        let res = await api.post(JADI_EXPERT_DASHBOARD_URL, payload);
        this.formJadiExpertDashboard = res.data;
      } catch (error) {}
    },
    async getDataDetailFormExpertPermanent(id) {
      try {
        let res = await api.get(SUBMISSION_EXPERT_TEMP + id);
        this.expertPermanent = res.data;
      } catch (error) {}
    },
    async getDataTableExpertPermanent() {
      try {
        let res = await apiStatic.get(DATA_DETAIL_TABLE_EXPERT_PERMANENT + '?search=', this.pagination)
        // let res = await api.get(DATA_DETAIL_TABLE_EXPERT_PERMANENT)
        this.tableExpertPermanent = res.data;
        this.pagination = res.pagination
      } catch (error) {}
    },
    async deleteDataTableExpertPermanent(id) {
      try {
        await api.delete(DELETE_TABLE_EXPERT_PERMANENT + id);
      } catch (error) {}
    },
    async editDataTableExpertPermanent(id) {
      try {
        await api.put(EDIT_TABLE_EXPERT_PERMANENT + id);
      } catch (error) {}
    },
    async publishExpertPermanent(id) {
      try {
        await api.post(PUBLISH_TABLE_EXPERT_PERMANENT + id);
      } catch (error) {}
    },
    //------- Page Formulir Jadi Expert Temporary Dashboard -------
    async getDataSubmissionExpertTemp(id) {
      try {
        let res = await api.get(SUBMISSION_EXPERT_TEMP + id);
        this.submissionExpertTemp = res.data;
      } catch (error) {}
    },
    async getDataTableSubmissionExpertTemp(payload) {
      try {
        // let res = await api.get(DETAIL_EXPERT_URL);
        let res = await apiStatic.get(SUBMISSION_TABLE_EXPERT_TEMP + "?page=" + this.pagination.page + "&per_page=" + this.pagination.per_page + "&search=" + this.pagination.search, payload);
        this.tableSubmissionExpertTemp = res.data;
        this.pagination = res.pagination
      } catch (error) {}
    },
    setPagination(payload) {
      this.pagination = payload;
    },
    async deleteDataTableSubmissionExpertTemp(id) {
      try {
        await api.delete(DELETE_SUBMISSION_TABLE_EXPERT_TEMP + id);
      } catch (error) {}
    },
    //accept&reject digabung sama publish
    async acceptRejectFormJadiExpertDashboard(payload) {
      try {
        const result = await api.post(ACCEPT_REJECT_SUBMISSION_TABLE_EXPERT_TEMP, payload);
        return result 
        console.log(result)
      } catch (error) {}
    },
    // async rejectFormJadiExpertDashboard(payload) {
    //   try {
    //     await api.post(REJECT_SUBMISSION_TABLE_EXPERT_TEMP, payload);
    //   } catch (error) {}
    // },
     //-------------------------- User -------------------------------
    async getDataTableUser(){
      let res = await apiStatic.get(DATA_DETAIL_TABLE_EXPERT_PERMANENT)
      this.tableUser = res.data
      this.pagination = res.pagination
    },
    async editUser(id){
      try {
        await api.put(EDIT_USER + id)
      } catch (error) {}
    },
    async deleteUser(id){
      try {
        await api.delete(DELETE_USER + id)
      } catch (error){}
    },
    async createUser(payload){
      try {
        await api.post(CREATE_USER, payload)
      } catch (error){}
    },
    async statusUser(id){
      try {
        await api.put(STATUS_USER + id)
      } catch (error){}
    },
    async verifEmailUser() {
      try {
        await api.post(EMAIL_VERIFICATION, payload)
      } catch (error){}
    },
    async getDataDetailProfileUser(id) {
      try {
        let res = await api.get(EMAIL_VERIFICATION + id);
        this.detailExpert = res;
        this.pagination = res.pagination
      } catch (error) {
        console.log("error");
      }
    },
    async getDataTransactionUser(id) {
      try {
        let res = await api.get(TRANSACTION_USER + id);
        this.detailTransactionUser = res;
      } catch (error) {
        console.log("error");
      }
    },
    async getListExpertOptionData(search) {
      try {
        let res = await api.get(LIST_PUBLISHED_EXPERT + "?search=" + search);
        if(!res.data){
          return []
        }
        return res.data
      } catch (error) {
        console.log("error");
      }
    },
    // ------------------------ Konsultasi -------------------------
    async getDataTableConsultation(payload) {
      try {
        let res = await apiStatic.get(DATA_TABLE_CONSULTATION + "?page=" + this.pagination.page + "&per_page=" + this.pagination.per_page + "&search=" + this.pagination.search, payload);
        this.tableConsultation = res.data;
        this.pagination = res.pagination
      } catch (error) {}
    },
    async getDataDetailPelatihan(id) {
      try {
        let res = await api.get(DATA_DETAIL_CONSULTATION + id);
        this.detailConsultation = res.data;
      } catch (error) {}
    },
    async formTambahTransaksiKonsultasiDashboard(payload) {
      try {
        let res = await api.post(DASHBOARD_NEW_TRANSACTION_CONSULTATION, payload);
        this.formTambahTransaksiKonsultasiDashboard = res.data;
      } catch (error) {}
    },
    async formPengajuanKonsultasi(payload) {
      try {
        let newPayload = {
          "service":{"consultation":payload},
          "expert_id":payload.expert_id
        }
        await api.post(SUBMISSION_CONSULTATION, newPayload);
      } catch (error) {}
    },
    // ------------------------ Recruit Expert -------------------------
    async getDataTableRecruitExpert(payload) {
      try {
        let res = await apiStatic.get(DATA_TABLE_RECRUIT_EXPERT + "?page=" + this.pagination.page + "&per_page=" + this.pagination.per_page + "&search=" + this.pagination.search, payload);
        this.tableRecruitExpert = res.data;
        this.pagination = res.pagination
      } catch (error) {}
    },
    async getDataDetailRecruitExpert(id) {
      try {
        let res = await api.get(DATA_DETAIL_RECRUIT_EXPERT + id);
        this.detailRecruitExpert = res.data;
      } catch (error) {}
    },
    async formTambahTransaksiRekrutExpertDashboard(payload) {
      try {
        let res = await api.post(DAHSBOARD_NEW_TRANSACTION_RECRUIT_EXPERT, payload);
        this.formTambahTransaksiRekrutExpertDashboard = res.data;
      } catch (error) {}
    },
    async formPengajuanRekrutExpert(payload) {
      try {
        let newPayload = {
          "service":{"recruit_expert":payload},
          "expert_id":payload.expert_id
        }
        await api.post(SUBMISSION_RECRUIT_EXPERT, newPayload);
      } catch (error) {}
    },
    // ------------------------ Undang Expert -------------------------
    async getDataTableInviteExpert(payload) {
      try {
        let res = await apiStatic.get(DATA_TABLE_INVITE_EXPERT + "?page=" + this.pagination.page + "&per_page=" + this.pagination.per_page + "&search=" + this.pagination.search, payload);
        this.tableInviteExpert = res.data;
        this.pagination = res.pagination
      } catch (error) {}
    },
    async getDataDetailUndangExpert(id) {
      try {
        let res = await api.get(DATA_DETAIL_INVITE_EXPERT + id);
        this.detailUndangExpert = res.data;
      } catch (error) {}
    },
    async formTambahTransaksiUndangExpertDashboard(payload) {
      try {
        let res = await api.post(DAHSBOARD_NEW_TRANSACTION_INVITE_EXPERT, payload);
        this.formTambahTransaksiUndangExpertDashboard = res.data;
      } catch (error) {}
    },
    async formPengajuanUndangExpert(payload) {
      try {
        let newPayload = {
          "service":{"invite_expert":payload},
          "expert_id":payload.expert_id
        }
        await api.post(SUBMISSION_INVITE_EXPERT, newPayload);
      } catch (error) {}
    }
  },
});
