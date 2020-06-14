import { cardsAPI } from "../api/api";

const SET_CARDS = 'SET_CARDS';
const SET_FIELDS = 'SET_FIELDS';
const DELETE_CARD = 'DELETE_CARD';
const ADD_CARD = 'ADD_CARD';
const DRAG_HAPPEND = 'DRAG_HAPPEND';

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
        case DRAG_HAPPEND: 
            let newState = [...state.cards];
            const {droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd,draggableId} = action.payload;
            //in same row
            if(droppableIdStart === droppableIdEnd) {
                const list = state.cards.filter(list => droppableIdStart === list.row);                
                const card = list.splice(droppableIndexStart, 1); 
                card[0].seq_num = droppableIndexEnd;
                list.splice(droppableIndexEnd, 0, ...card);                        
            }
            //other row
            if(droppableIdStart !== droppableIdEnd) {                
                const listStart = state.cards.filter(list => droppableIdStart == list.row);
                const card = listStart.splice(droppableIndexStart, 1);                
                const listEnd = state.cards.filter(list => droppableIdEnd == list.row);
                card[0].row = droppableIdEnd;
                card[0].seq_num = droppableIndexEnd;
                listEnd.splice(droppableIndexEnd, 0, ...card);
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
export const sortCards = (droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd,draggableId) => ({type: DRAG_HAPPEND, payload: {droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd,draggableId}});

export const updateCard = () => {
    return async (dispatch) => {
        await cardsAPI.updateCard()
        .then(resp => console.log(resp));
    };     
};