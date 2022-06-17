import http from "./api.service";
import { environment } from "../../environment";

const ScheduleService = {
    create: (body) => {
        return http.post('/schedule', body);
    },

    get: (body = {} ) => {
        return http.get('/schedule', { params: body });
    },

    getTeacher: () => {
        return http.get('/schedule/teacher');
    },

    download: () => {
        window.open(environment.api_url+'/schedule/export', '_blank')?.focus();
    },

    attendance: (body) => {
        return http.post('/schedule/attendance', body);
    }
}

export default ScheduleService;