import http from "./api.service";

const ComplaintService = {
    create: (body) => {
        return http.post('/complaint', body);
    },

    getMy: () => {
        return http.get('/complaint/get/my');
    }
}

export default ComplaintService;