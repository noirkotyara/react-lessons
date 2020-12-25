import * as axios from 'axios';

export const instance = axios.create({ //we have an object
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "30bffa88-490b-405c-83b6-e6b58d235873"
    }
});