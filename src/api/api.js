import * as axios from 'axios';

const instance = axios.create({
    baseURL: "https://trello.backend.tests.nekidaem.ru/api/v1/",
    headers: {
        'Authorization' : 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNTAsInVzZXJuYW1lIjoiYWxpbmFoYWx1c2hrbyIsImV4cCI6MTU5MTk5NTEyNSwiZW1haWwiOiJhbGluYWhhbHVzaGtvMkBnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTU5MTk5MTUyNX0.0e4o5KVeoconRTmY9ilzFM5_tvdRdfpay8ZWUg4uJcc',
        'Accept': 'application/json',
        'Content-Type': 'text/plain'}
});

export const cardsAPI = {
    requestCards() {
        return instance.get(`cards/`)
        .then(response => response.data);
    },
    createCard(formDate) {
        return instance.post(`cards/`, formDate);
    },
    deleteCard(id) {
        return instance.delete(`cards/${id}/`);
    }
}; 


export const authAPI = {
    signin(formDate) {
        return instance.post(`users/login/`, formDate);
    },
    login(formDate) {
        return instance.post(`users/create/`, formDate);
    }
};