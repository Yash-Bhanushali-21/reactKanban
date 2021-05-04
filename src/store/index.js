import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import combineReducers from "../reducers";
import {addState} from '../actions';

const store = createStore(combineReducers,applyMiddleware(thunk));
store.dispatch(addState());

export default store;