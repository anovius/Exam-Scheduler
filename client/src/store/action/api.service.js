import axios from "axios";
import { environment } from "../../environment";

export default class ApiService {
  
    async get(url, params = {}){
      return await axios.get(environment.api_url + url, params);
    }

    async post(url, body = {}){
        return await axios.post(environment.api_url + url, body);
    }

    async put(url, body = {}){
        return await axios.put(environment.api_url + url, body);
    }
}