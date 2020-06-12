import { createStore, combineReducers, applyMiddleware, compose }  from 'redux';
import { boardReducer } from './board-reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    boardPage: boardReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;



 

