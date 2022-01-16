import http from "./api.service";

const ClassService = {
    create: (body) => {
        return http.post('/class', body);
    },

    getAll: () => {
        return http.get('/class/get/all');
    }
}

export default ClassService;