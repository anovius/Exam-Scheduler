import ApiService from "./api.service";

export default class UserService{
    async login(body){
        return await ApiService.post('/login', body);
    }
}