import { cardsAPI } from "../api/api";

const SET_CARDS = 'SET_CARDS';
const SET_FIELDS = 'SET_FIELDS';
const DELETE_CARD = 'DELETE_CARD';
const ADD_CARD = 'ADD_CARD';

let initialState = {
    cards: [ ],
    text: " ",
    row: null
};

export const boardReducer = (state = initialState, action) => {
    switch(action.type) {         
        case SET_CARDS:
            return { ...state, cards: action.cards };
        case SET_FIELDS: 
            return {...state, text: action.text, row: action.id};
        case DELETE_CARD: 
            let newCards = state.cards.filter(c => c.id !== action.id)
            return {...state, cards: newCards};
        case ADD_CARD: 
            console.log(action);
            return {...state, cards: [...state.cards, action.card]};
        default:
            return state;
    }
};

//Action for get all of cards
export const setCards = (cards) => ({ type: SET_CARDS, cards});
export const requestCards = (data) => {
    return async (dispatch) => {
        let data = await cardsAPI.requestCards();
        dispatch(setCards(data));
    };
};

//Action for add a new card
export const setFields = (text, id) => ({type: SET_FIELDS, text, id});
export const addCard = (card) => ({type: ADD_CARD, card});
export const addNewCard = (formData) => {
    return async (dispatch) => {
        let data = await cardsAPI.createCard(formData);
        dispatch(addCard(data.data))
    };    
};

//Action for delete card
export const deleteCardForId = (id) => ({ type: DELETE_CARD, id});
export const deleteCard = (id) => {
    return async (dispatch) => {
        await cardsAPI.deleteCard(id);
        dispatch(deleteCardForId(id));
    };     
};


