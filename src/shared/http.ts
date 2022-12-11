import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({baseURL: process.env.API_URL});

api.interceptors.request.use((config) => {
    config.params = {populate: 'deep'};
    return config;
});

api.interceptors.response.use((response) => {
    response = {...response.data.data.attributes};
    return response;
})

export default api;