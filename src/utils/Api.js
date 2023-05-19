import axios from "axios";
import _ from "lodash";
import router from "../router";
import { toast } from 'vue3-toastify';
import { useLayoutStore } from "../pages/layout/store";

const apiAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const isDev = import.meta.env.VITE_APP_ENV == "dev";

const serializeUrlQuery = function (obj) {
  if (_.isEmpty(obj)) return "";
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return "?" + str.join("&");
};

apiAxios.defaults.timeout = 10000;
apiAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
apiAxios.interceptors.response.use(
  (response) => {
    const layoutStore = useLayoutStore();
    if (response.status == 200) {
      return Promise.resolve(response.data.data);
    }else if(response.status > 200 && response.status < 300){
      toast.success(response.data.message, {
        timeout: 2000,
      });
      return Promise.resolve(response.data.data);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    console.log(error);
    let message = error.response.data.message;
    if (
      error.response.data.statusCode != 401 &&
      error.response.data.statusCode != 403
    ) {
      toast.error(message, {
        timeout: 2000,
      });
    }
    // if (error.response.data.statusCode == 401) {
    //   localStorage.removeItem("token");
    //   router.push("/signin");
    // }
    return Promise.reject(error.response.data);
  }
);

export const api = {
  get: function (url = "", payload = {}) {
    return new Promise(async (resolve, reject) => {
      try {
        let res = await apiAxios.get(url, serializeUrlQuery(payload));
        resolve(res);
      } catch (error) {
        if (isDev) {
          console.log("ERROR GET API: " + url + ", error:", error);
        }
        reject(false);
      }
    });
  },
  post: function (url = "", payload = {}) {
    return new Promise(async (resolve, reject) => {
      try {
        let res = await apiAxios.post(url, payload);
        resolve(res);
      } catch (error) {
        if (isDev) {
          console.log("ERROR POST API: " + url + ", error:", error);
        }
        reject(false);
      }
    });
  },
  put: function (url = "", payload = {}) {
    return new Promise(async (resolve, reject) => {
      try {
        let res = apiAxios.put(url, payload);
        resolve(res);
      } catch (error) {
        if (isDev) {
          console.log("ERROR PUT API: " + url + ", error:", error);
        }
        reject(false);
      }
    });
  },
  delete: function (url = "") {
    return new Promise(async (resolve, reject) => {
      try {
        let res = apiAxios.delete(url, payload);
        resolve(res);
      } catch (error) {
        if (isDev) {
          console.log("ERROR DELETE API: " + url + ", error:", error);
        }
        reject(false);
      }
    });
  },
};

export default api;
