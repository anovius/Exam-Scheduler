import http from "./api.service";
import { environment } from "../../environment";

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
        window.open(environment.api_url+'/schedule/export', '_blank')?.focus();
    }
}

export default ScheduleService;