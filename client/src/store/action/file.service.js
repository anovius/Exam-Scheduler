import http from "./api.service";

const FileService = {
    upload: (body) => {
        return http.post('/file', body);
    }
}

export default FileService;