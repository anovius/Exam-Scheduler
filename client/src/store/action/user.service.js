import http from "./api.service";

const UserService = {
    login : (body) => {
        return http.post('/user/login', body);
    }
}

export default UserService;