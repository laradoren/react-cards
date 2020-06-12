import { boardAPI } from "../api/api";

const SET_CARDS = 'SET_CARDS';
const ADD_CARD = 'ADD-CARD';
const DELETE_CARD = 'DELETE-CARD';
const TITLE_CHANGE = 'TITLE-CHANGE'


let initialState = {
    cards: [],
    newTitle : null,
    newRow: null
}

export const boardReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_CARD: 
            let newCard = {
                id: state.cards.length + 1,
                row: action.card.newRow,
                seq_num: 0,
                text: action.card.newTitle,
            };
            return {
                ...state,
                cards: [...state.cards, newCard]
            };
        case DELETE_CARD: 
            return state;
        
        case SET_CARDS:
            return { ...state, cards: action.cards };
        case TITLE_CHANGE: 
            return {...state, newTitle: action.card.value, newRow: action.card.id}
        default:
            return state;
    }
};

export const setCards = (cards) => ({ type: SET_CARDS, cards});

export const addNewCard = ({newRow, newTitle}) => ({ type: ADD_CARD, card: {newRow, newTitle}});

export const requestCards = () => {
    return async (dispatch) => {
        let data = await boardAPI.requestCards();
        dispatch(setCards(data));
    };
};

export const createNewCards = ({newRow, newTitle}) => {
    return async (dispatch) => {
        await boardAPI.createCard({newRow, newTitle});  
            dispatch(addNewCard({newRow, newTitle}));     
    };
};

export const onTitleChange = ({value, id}) => ({ type: TITLE_CHANGE, card: {value, id}});



