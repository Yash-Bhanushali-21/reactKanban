import {CONSTANTS} from './index.js';
import {initialData} from '../reducers/initialData';

export const resetState = () => {
    return {
        type :CONSTANTS.RESET,
        payload : initialData
    }
}

