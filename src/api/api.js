import * as axios from 'axios';

const instance = axios.create({
    baseURL: "https://trello.backend.tests.nekidaem.ru/api/v1/",
    headers: {
        'Authorization' : `JWT ${localStorage.getItem('token')}` , 
        'Accept': 'application/json',
        'Content-Type': 'application/json'}
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
    },
    updateCard(id, body) {
        return instance.patch(`cards/${id}/`, body);//????
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