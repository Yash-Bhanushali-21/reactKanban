import {CONSTANTS} from '../actions';

let listId = 3;
let cardId = 2;
const initialState = [
    {
        title : "Applicants",
        id : `list-${0}`,
        cards : [
            {
                id :`card-${0}`,
                designation : "React Developer,B.E.",
                title : "Yash Bhanushali",
                about : "Bachelors in Engineering, Information Technology",
                image : "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"
            },
            {
                id :`card-${1}`,
                designation : "Node Developer,B.E.",
                title : "Harsh Bhanushali",
                about : "Bachelors in Engineering, Information Technology",
                image : "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"
            }
        ]
    },
    {
        title : "Review",
        id : `list-${1}`,
        cards : []
    },
    {
        title : "Shortlisted",
        id : `list-${2}`,
        cards : []

    }
]

const listsReducer = (state = initialState , action) => {
    switch(action.type){

        case CONSTANTS.ADD_LIST:
            const newList = {
                title : action.payload,
                cards : [],
                id : `list-${listId}`
            };
            listId += 1;
            return [...state,newList];
        //listId,d,a,t,img
        case CONSTANTS.ADD_CARD: {
            const newCard = {
                id : `card-${cardId}`,
                designation : action.payload.d,
                title : action.payload.t,
                about : action.payload.a,
                image : action.payload.i

            };
            cardId += 1;
            const newState = state.map(list => {
                if(list.id === action.payload.listId){
                    return {
                        ...list,
                        cards : [...list.cards,newCard]
                    }
                }
                else{
                    return list;
                }
            });
            return newState;
        }
        
        case CONSTANTS.DRAG_HAPPENED:{
            const {droppableIdStart,
                droppableIdEnd,
                droppableIndexEnd,
                droppableIndexStart,
                draggableId,type} = action.payload;
            const newState  = [...state];
            if(type === 'list'){
                const list = newState.splice(droppableIndexStart,1);
                newState.splice(droppableIndexEnd,0,...list);
                return newState;
            }
            //if same list
            if(droppableIdStart === droppableIdEnd){
                const list = state.find(list => droppableIdStart === list.id);
                const card = list.cards.splice(droppableIndexStart,1);
                list.cards.splice(droppableIndexEnd, 0, ...card);
            }
            //if list is different.
            if(droppableIdStart !== droppableIdEnd){
                //find list where drag happened
                const listStart = state.find(list => droppableIdStart === list.id);
                //pull that card.
                const card = listStart.cards.splice(droppableIndexStart,1);
                //find list where drag ended
                const listEnd = state.find(list => droppableIdEnd === list.id);
                //put card in new list
                listEnd.cards.splice(droppableIndexEnd,0,...card);

            }
            return newState;
        }

        default:
            return state;
    }
};

export default listsReducer;