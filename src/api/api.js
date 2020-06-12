import * as axios from 'axios';

const instance = axios.create({
    baseURL: "https://trello.backend.tests.nekidaem.ru/api/v1/",
    headers: {
        "Authorization" : "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNTAsInVzZXJuYW1lIjoiYWxpbmFoYWx1c2hrbyIsImV4cCI6MTU5MTk3MTQ0NiwiZW1haWwiOiJhbGluYWhhbHVzaGtvMkBnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTU5MTk2Nzg0Nn0.rSSJoP2kOPEdWZa_LlDNFu8Yyrwqz6nj2Wt4UJyaQLY"
     }
});

export const boardAPI = {
    requestCards() {
        return instance.get(`cards/`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },
    createCard({newRow, newTitle}) {
        return instance.post(`cards/`, {newRow, newTitle})
        .then(response => response.data);
    }
}; 


export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
};



