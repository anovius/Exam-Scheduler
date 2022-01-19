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
}

export default UserService;