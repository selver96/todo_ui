import axios, { AxiosRequestConfig } from "axios";

export const API_URL = 'http://127.0.0.1:8000';

const $api = axios.create(
    {
        baseURL: API_URL
    }
);


if (localStorage.getItem("access_token")) {
    $api.interceptors.request.use((config: AxiosRequestConfig | any) => {
        config.headers.Authorization = 'Bearer '+localStorage.getItem('access_token');
        return config;
    })
}
export default $api;