import http from "./api.service";

const ScheduleService = {
    create: (body) => {
        return http.post('/schedule', body);
    },

    get: () => {
        return http.get('/schedule');
    },

    getTeacher: () => {
        return http.get('/schedule/teacher');
    },

    download: () => {
        return http.get('/schedule/export');
    }
}

export default ScheduleService;