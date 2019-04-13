import axios from 'axios';

const api = axios.create({
    baseURL: 'https://myomnibackend.herokuapp.com' 
});

export default api;