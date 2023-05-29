import axios from "axios";

const loginConfig = {
    baseURL: process.env.VUE_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
}

export const LoginAPIINstance = axios.create(loginConfig);

const defaultConfig = {
    baseURL: process.env.VUE_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
}

export const DefaultAPIINstance = axios.create(defaultConfig);


DefaultAPIINstance.interceptors.response.use(
    response => response,
    error => {
        if (error.code === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('userRole');
            location.reload();
        }

        return Promise.reject(error);
    }
)