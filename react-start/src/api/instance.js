import * as axios from 'axios';

export const instance = axios.create({ //we have an object
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "ebd28442-c10f-47c7-b19b-27d6fc3e2b96"
    }
});