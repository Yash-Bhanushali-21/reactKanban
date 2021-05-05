import {combineReducers} from 'redux';
import listReducer from './listReducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['lists']
}
const rootReducer = combineReducers({
    lists : listReducer
});

export default persistReducer(persistConfig,rootReducer);