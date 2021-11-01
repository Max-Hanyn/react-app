import * as axios from "axios";

const baseUrl = "https://social-network.samuraijs.com/api/1.0/";
const instance = axios.create({

    withCredentials: true,
    baseURL: baseUrl,
    headers: {
        "API-KEY": "62b3b8c5-8fee-44c8-b558-a39d9ca007d9"
    }
});

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(response => {
            return response.data
        });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`)

    },
    getProfile(userId) {
        return profileAPI.getProfile(userId);
    }
}
export const authAPI = {
    authMe() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`,{email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put("profile/status", {
            status: status,
        })
    }
}