import {CONSTANTS} from './index.js';

export const addCard = (listId,d,a,t,i) => {
    return {
        type :CONSTANTS.ADD_CARD,
        payload : {listId,d,a,t,i}
    }
}

