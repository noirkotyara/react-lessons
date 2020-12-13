const { instance } = require("./instance")

export const usersAPI = {
    getUsers(currentPage, pageSize) { 
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    changeCurPage(page, pageSize) {
        return instance.get(`users?page=${page}&count=${pageSize}`)
            .then(response => response.data);
    },
    unFollowDeleteRequest(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    },
    followPostRequest(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    }
};

export const authAPI = {
    isAuthMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    isLogin(data) {
        return instance.post(`auth/login`, { email: data.login, password: data.password, rememberMe: data.checkbox })
            .then(response => {
                return response.data
            })
    },
    isLogout() {
        return instance.delete(`auth/login`)
            .then(response => {
                return response.data
            })
    }
}

export const userProfile = {
    showProfile(userID) {
        return instance.get(`profile/${userID}`)
            .then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`/profile/status`, { status: status })
            .then(response => response.data)
    },
    getStatus(userID) {
        return instance.get(`/profile/status/${userID}`)
            .then(response => response.data)

    },
    uploadPhoto(file){
        let formData = new FormData();
        formData.append('image',file);
        return instance.put(`/profile/photo`, formData, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data)
    }
}