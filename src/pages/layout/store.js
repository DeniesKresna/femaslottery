import { defineStore } from "pinia";
import api from "../../utils/Api";
import { USER_SESSION_URL } from "./constants";

export const useLayoutStore = defineStore({
  id: "layout",
  state: () => ({
    session: {},
    role: {},
  }),
  actions: {
    setSession(payload = {}) {
      this.session = payload;
    },
    setDashboardLayouts(payload = {}) {
      this.dashboardAlert = payload;
    },
    async getSession() {
      try {
        let res = await api.get(USER_SESSION_URL);
        this.session = res.user;
        this.role = res.role;
      } catch (error) {}
    },
    signOut() {
      localStorage.removeItem("token");
      this.setSession({});
    },
  },
  getters: {
    sessionFirstName(state) {
      return state.session.first_name;
    },
  },
});
