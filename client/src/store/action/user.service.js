import ApiService from "./api.service";
const apiService = new ApiService();

export default class UserService{
    login(body){
        return apiService.post('/user/login', body);
    }
}