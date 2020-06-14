import { cardsAPI } from "../api/api";

const SET_CARDS = 'SET_CARDS';
const SET_FIELDS = 'SET_FIELDS';
const DELETE_CARD = 'DELETE_CARD';
const ADD_CARD = 'ADD_CARD';
const UPDATE_CARD = 'UPDATE_CARD';

let initialState = {
    cards: [ 
    ],
    text: " ",
    row: null,
    rowList : [{id: "0",
        title: "ON HOLD"},
        {id: "1",
        title: "IN PROGRESS"},
        {id: "2",
        title: "NEEDS REVIEW"},
        {id: "3",
        title: "APPROVED"}]
};

export const boardReducer = (state = initialState, action) => {
    switch(action.type) {         
        case SET_CARDS:
            return { ...state, cards: action.cards };
        case SET_FIELDS: 
            return {...state, text: action.text, row: action.id};
        case DELETE_CARD: 
            let newCards = state.cards.filter(c => c.id != action.id);
            return {...state, cards: newCards};
        case ADD_CARD: 
            return {...state, cards: [...state.cards, action.card]};
        case UPDATE_CARD: 
            let newState = [...state.cards];
            console.log(newState);
            const {data, id, dropIdStart, dropIdEnd, dropIndexStart, dropIndexEnd} = action.payload;
            let count = 0;
            if(dropIdStart == dropIdEnd) {
                const list = state.cards.filter( l => dropIdStart === l.row);
                list.splice(dropIndexStart, 1);
                list.splice(dropIndexEnd, 0, data);
                const index = newState.findIndex(s => s.row === dropIdStart);
                newState.splice(index, list.length, ...list);
                newState.map( c => {
                    newState.map( n => {
                        if(c.id === n.id) {
                            count++;
                            console.log(c.id, n.id);
                        }
                    });
                });
                if(count > newState.length) {
                    window.location.reload();
                }               
            };
            if(dropIdStart != dropIdEnd) {
                const listStart = state.cards.filter(list => dropIdStart == list.row);
                const card = listStart.splice(dropIndexStart, 1);                
                const listEnd = state.cards.filter(list => dropIdEnd == list.row);
                card[0].row = dropIdEnd;
                card[0].seq_num = dropIndexEnd;
                listEnd.splice(dropIndexEnd, 0, ...card);              
            }
            return {...state, cards: [...newState]};
        default:
            return state;
    }
};

//Action for get all of cards
const setCards = (cards) => ({ type: SET_CARDS, cards});
export const requestCards = () => {
    return async (dispatch) => {
        let data = await cardsAPI.requestCards();
        dispatch(setCards(data));
    };
};

//Action for add a new card
export const setFields = (text, id) => ({type: SET_FIELDS, text, id});
const addCard = (card) => ({type: ADD_CARD, card});
export const addNewCard = (formData) => {
    return async (dispatch) => {
        let data = await cardsAPI.createCard(formData);
        dispatch(addCard(data.data))
    };    
};

//Action for delete card
const deleteCardForId = (id) => ({ type: DELETE_CARD, id});
export const deleteCard = (id) => {
    return async (dispatch) => {
        await cardsAPI.deleteCard(id);
        dispatch(deleteCardForId(id));
    };     
};

//Action for sort cards
const updateCards = (data, id, dropIdStart, dropIdEnd, dropIndexStart, dropIndexEnd) => ({type: UPDATE_CARD, payload: {data, id,  dropIdStart, dropIdEnd, dropIndexStart, dropIndexEnd}});

export const sortCards = (id, body, dropIdStart, dropIdEnd, dropIndexStart, dropIndexEnd) => {
    return async (dispatch) => {
        let data = await cardsAPI.updateCard(id, body);
            dispatch(updateCards(data.data, id, dropIdStart, dropIdEnd, dropIndexStart, dropIndexEnd));
    };     
};