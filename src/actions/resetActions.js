import {CONSTANTS} from './index.js';

export const resetState = (initialStateData) => {
    return {
        type :CONSTANTS.RESET,
        payload : initialStateData
    }
}

