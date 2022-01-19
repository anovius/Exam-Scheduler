import http from "./api.service";

const SubjectService = {

    createSubject: (body) => {
        return http.post('/subject', body);
    },

    getSubjects: () => {
        return http.get('/subject/get/all');
    },
}

export default SubjectService;