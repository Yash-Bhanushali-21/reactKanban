import {CONSTANTS} from './index.js';

export const addList = (title) => {
    return {
        type :CONSTANTS.ADD_LIST,
        payload : title
    }
}
export const sort = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexEnd,
    droppableIndexStart,
    draggableId,
    type
 ) => {
     return {
         type : CONSTANTS.DRAG_HAPPENED,
         payload : {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId,
            type
         }
     }
 }
