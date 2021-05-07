import {combineReducers} from 'redux';
import listReducer from './listReducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


export default combineReducers({
    lists : listReducer
});

// default persistReducer(persistConfig,rootReducer);