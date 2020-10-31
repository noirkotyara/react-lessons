import * as axios from 'axios';

export const instance = axios.create({ //we have an object
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "9c2e4d66-4ed0-4976-8ef0-e6d697c58441"
    }
});