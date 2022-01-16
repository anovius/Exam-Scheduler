import axios from "axios";
import { environment } from "../../environment";
axios.defaults.baseURL = environment.api_url;

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 10000;

export const setAuthToken = (token) => {
  if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
      delete axios.defaults.headers.common['Authorization']
  }
};

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};

export default http;