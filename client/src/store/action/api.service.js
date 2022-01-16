import axios from "axios";
import { environment } from "../../environment";

axios.defaults.baseURL = environment.api_url;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 10000;

let token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};

export default http;