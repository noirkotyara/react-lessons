const { instance } = require("./instance")

export const usersAPI = {
    getUsers(currentPage, pageSize) { //юзаємо return бо функція getUsers вертає проміси, 
        //які в свою чергу є об'єктом, а отже даними, 
        //які будемо юзати в подальшому
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
    }
}

export const userProfile = {
    showProfile(userID) {
        return instance.get(`profile/${userID}`)
            .then(response => response.data)
    }
}