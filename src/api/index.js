import axios from "axios";

const VUE_APP_BASE_URL = 'http://localhost/eventlist-api/api'

// User config
const userConfig = {
    baseURL: VUE_APP_BASE_URL + '/user',
    headers: {
        'Content-Type': 'application/json'
    }
}

export const UserAPIINstance = axios.create(userConfig);

// Event config
const eventConfig = {
    baseURL: VUE_APP_BASE_URL + '/event',
    headers: {
        'Content-Type': 'application/json'
    }
}

export const EventAPIINstance = axios.create(eventConfig);

// Organisation config
const organisationConfig = {
    baseURL: VUE_APP_BASE_URL + '/organisation',
    headers: {
        'Content-Type': 'application/json'
    }
}

export const OrganisationAPIINstance = axios.create(organisationConfig);

// Event Entry config
const entryConfig = {
    baseURL: VUE_APP_BASE_URL + '/event_entry',
    headers: {
        'Content-Type': 'application/json'
    }
}

export const EntryAPIINstance = axios.create(entryConfig);

// Default config
const defaultConfig = {
    baseURL: VUE_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
}

const token = localStorage.getItem('token');
if (token) defaultConfig.headers['authorization'] = `Bearer ${token}`;

export const DefaultAPIINstance = axios.create(defaultConfig);








/* DefaultAPIINstance.interceptors.response.use(
    response => response,
    error => {
        if (error.code === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('userRole');
            location.reload();
        }

        return Promise.reject(error);
    }
) */