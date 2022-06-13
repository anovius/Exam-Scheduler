import http from "./api.service";

const ComplaintService = {
    create: (body) => {
        return http.post('/complaint', body);
    },

    getMy: () => {
        return http.get('/complaint/get/my');
    },

    getAll: () => {
        return http.get('/complaint/get/all');
    },

    reply: (slug, body) => {
        return http.post(`/complaint/reply/${slug}`, body);
    }
}

export default ComplaintService;