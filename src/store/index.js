import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import combineReducers from "../reducers";
import {persistStore} from 'redux-persist';
import {addState} from '../actions';

export const store = createStore(combineReducers,applyMiddleware(thunk));
store.dispatch(addState());
export const persistor = persistStore(store);

