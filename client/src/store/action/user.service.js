import ApiService from "./api.service";

export default class UserService{
    async login(body){
        return ApiService.post('/user/login', body);
    }
}