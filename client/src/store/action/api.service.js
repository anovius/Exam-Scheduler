import axios from "axios";
import { environment } from "../../environment";

export default class ApiService {
  
    get(url, params = {}){
      return axios.get(environment.api_url + url, params);
    }

    post(url, body = {}){
        return axios.post(environment.api_url + url, body);
    }

    put(url, body = {}){
        return axios.put(environment.api_url + url, body);
    }
}