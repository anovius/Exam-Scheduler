import http from "./api.service";

const UserService = {
    login : (body) => {
        return http.post('/user/login', body);
    },

    createStudent: (body) => {
        return http.post('/user/add/student', body);
    },

    getStudents: () => {
        return http.get('/user/get/students');
    },
    
    createTeacher: (body) => {
        return http.post('/user/add/teacher', body);
    },

    getTeachers: () => {
        return http.get('/user/get/teachers');
    },

    getRooms:() => {
        return http.get('/user/others/rooms');
    },

    addSlot: (body) => {
        return http.post('/user/add/slot', body);
    },

    getSlots:() => {
        return http.get('/user/others/slots');
    },

    settings: (body) => {
        return http.post('/user/settings', body);
    },

    getStudents: (body) => {
        return http.post('/user/get/students', body);
    }
}

export default UserService;