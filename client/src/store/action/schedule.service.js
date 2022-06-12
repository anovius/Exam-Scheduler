import http from "./api.service";

const ScheduleService = {
    create: (body) => {
        return http.post('/schedule', body);
    }
}

export default ScheduleService;