import { ProfileType, UsersDataType, PhotosType } from './../types/types';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "30bffa88-490b-405c-83b6-e6b58d235873"
    }
});



export const usersAPI = {
    getUsers(currentPage: number, pageSize: number, term: string , friend: null | boolean) {
        return instance.get<UsersAPIResponseType>(`users?page=${currentPage}&count=${pageSize}&term=${term}${friend === null? '' : '&friend=' + friend}` )
            .then(response => response.data);
    },
    changeCurPage(page: number, pageSize: number) {
        return instance.get<UsersAPIResponseType>(`users?page=${page}&count=${pageSize}`)
            .then(response => response.data);
    },
    unFollowDeleteRequest(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data) as Promise<FollowUnfollowResponseType>
    },
    followPostRequest(id: number) {
        return instance.post<FollowUnfollowResponseType>(`follow/${id}`)
            .then(response => response.data);
    }
};



export const authAPI = {
    isAuthMe() {
        return instance.get<AuthAPIResponseType<DataIsAuthMeType, ResultCodeType>>(`auth/me`)
            .then(response => response.data)
    },
    isLogin(data: dataIsLoginType) {
        return instance.post<AuthAPIResponseType<DataIsLoginType, ResultCodeType>>
            (`auth/login`, {
                email: data.login,
                password: data.password,
                rememberMe: data.checkbox,
                captcha: data.symbols
            })
            .then(response => { return response.data })
    },
    isLogout() {
        return instance.delete<AuthAPIResponseType<DataIsAuthMeType, ResultCodeType>>(`auth/login`)
            .then(response => { return response.data })
    }
}


export const userProfile = {
    showProfile(userID: number) {
        return instance.get<ProfileType>(`profile/${userID}`)
            .then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put<AuthAPIResponseType<{}, ResultCodeType>>(`/profile/status`, { status: status })
            .then(response => response.data)
    },
    getStatus(userID: number) {
        return instance.get<string>(`/profile/status/${userID}`)
            .then(response => response.data)

    },
    uploadPhoto(file: File) {
        let formData = new FormData();
        formData.append('image', file);
        return instance.put<AuthAPIResponseType<{photos: string}, ResultCodeType>>(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data)
    },
    updateProfile(profile: ProfileType ) {
        return instance.put<AuthAPIResponseType<{}, ResultCodeType>>(`/profile`, profile)
            .then(response => response.data);
    }
}

export const securityAPI = {
    getCaptchaURL() {
        return instance.get<{url: string}>(`/security/get-captcha-url`)
            .then(response => response.data)
    }
}

export const dialogsAPI = {
    getAlldialogs(){
        return instance.get(`/dialogs`)
        .then(response => response.data)
    },
    startChat(userId: number){
        return instance.put<getDialogsAPIResponseType<{}>>(`/dialogs/${userId}`)
        .then(response => response.data)
    }
}


//++ dialogs/{userId}	
//++ dialogs
// dialogs/{userId}/messages
// dialogs/{userId}/messages
// dialogs/messages/{messageId}/viewed
// dialogs/messages/{messageId}/spam
// dialogs/messages/{messageId}
// dialogs/messages/{messageId}/restore
// dialogs/{userId}/messages/new?newerThen={date}
// dialogs/messages/new/count	


//types
export type getDialogsAPIResponseType<D> = {
    data: Array<D> 
    fieldsErrors?: []
    messages?: [] | Array<string>
    resultCode?: ResultCodeType
}

export type DataType = {
    id: number
    userName: string
    hasNewMessages: boolean
    lastDialogActivityDate: string
    lastUserActivityDate: string
    newMessagesCount: number
    photos: PhotosType
}

export type UsersAPIResponseType = {
    items: Array<UsersDataType>
    totalCount: number
    error: null | string
}

export type FollowUnfollowResponseType = {
    data: {}
    resultCode: ResultCodeType
    messages: [] | string
}
export type DataIsAuthMeType = {
    id: number
    email: string
    login: string
}
export type DataIsLoginType = {
    userId: number
}

export enum ResultCodeType {
    Success = 0,
    Error = 10
}

export type AuthAPIResponseType<dataType, ResultCodeType> = {
    data: dataType
    resultCode: ResultCodeType
    messages: [] | string
}
type dataIsLoginType = {
    checkbox: boolean
    symbols: string
    password: string
    login: string
}