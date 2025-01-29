// axios.js
import Axios from "axios";

// Dynamic import
const getStore = async () => {
  const { store } = await import('../redux/app/store.js');
  return store;
};

const newAxios = Axios.create({});

// const url = import.meta.env.API_URL;
const url = 'https://backend-auth-ecommerec-api-node-js.onrender.com/api/v1/';
// const url = 'http://localhost:4000/api/v1/'
export const baseURL = `${url}`;

newAxios.defaults.timeout =10000000

newAxios.interceptors.request.use(
  async function (config:any) {
    // Retreive token from Redux OR localStorage or ....
    const store = await getStore();
    const token = store?.getState()?.authData?.token;
    if (token) {
      config.headers["Authorization"] = `${token}`;
      console.log(token,'token')
      config.headers["Access-Control-Allow-Credentials"] = true;
    }
    // config.headers["Content-Type"] = "*";
    config.credentials = "same-origin";
    config.baseURL = baseURL;

    return config;
  },
  function (error:any) {
    return Promise.reject(error);
  }
);

newAxios.interceptors.response.use(
  (res:any) => {
    return res;
  },
  (error:any) => {
    if (error?.response?.status === 403) {
      // Handle forbidden error
    }
    if (error?.response?.status === 401) {
      // Handle unauthorized error (e.g., log out the user)
    }
    throw error; // Propagate the error
  }
);

export default newAxios;