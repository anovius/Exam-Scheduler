import http from "./api.service";

const UserService = {
    login : function(body){
        return http.post('/user/login', body);
    }
}

export default UserService;