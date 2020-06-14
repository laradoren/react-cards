import { authAPI } from "../api/api";

const SET_TOKEN = 'SET_TOKEN';
const GET_TOKEN = 'GET_TOKEN';
const SET_FIELDS = 'SET_FIELDS_LOGIN';

let initialState = {
    username: null,
    email: null,
    password: null,
    token: null
};


export const authReducer = (state = initialState, action) => {
    switch(action.type) {         
        case SET_TOKEN:
            return { ...state, token: action.token };
        case SET_FIELDS: 
            return {...state, [action.name]: action.value };
        case GET_TOKEN:
            return state.token;
        default:
            return state;
    }
};

export const setToken = (token) => ({ type: SET_TOKEN, token});
export const setFields = (name, value) => ({ type: SET_FIELDS, name, value});
export const getToken = ()=>({type:GET_TOKEN});


export const signin = (formData) => {
    return async (dispatch) => {
        await authAPI.signin(formData).then ( response => {
            if(response.status === 200) {
                dispatch(setToken(response.data.token));
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('message', "Вы авторизованы");
                window.location.reload();
            }            
        });  
    }; 
};

export const login = (formData) => {
    return async (dispatch) => {
        await authAPI.login(formData);       
    }; 
};


