import {CONSTANTS} from '../actions';
import axios from 'axios';
import {initialData} from './initialData';

let listId = 3;
let cardId = 2;


async function updateDatabase(stateObject) {
    // fetch data from a url endpoint
    const data = await axios.post("http://localhost:4000/updateDatabase",{stateObject : stateObject})
    .then((res) => console.log(res.statusCode))
    .catch((err) => console.log('error in db'))

  }

  function CountCard(newState)  {
    let card_count = 0;
    newState.map(list => {
        let curr_cards = list.cards;
        card_count += curr_cards.length;
    })
    return card_count;
}

function storeLocally(state){
    localStorage.setItem('state',JSON.stringify(state));
}

const listsReducer = (state = [] , action) => {
    switch(action.type){


        case CONSTANTS.RESET: {
            const newState = initialData;
            listId = 3;
            cardId = 2;
            console.log('reset id ' + cardId);
            //updateDatabase(newState);
            localStorage.removeItem('state');
            storeLocally(newState);
            return newState;
        }

        case CONSTANTS.STORE_DATA: {
            const newState = action.payload;
            listId = newState.length;
            cardId =  CountCard(newState);
            console.log('in store data : ', cardId);
            storeLocally(newState);
            return newState;
        }

        case CONSTANTS.ADD_LIST:{
            const newList = {
                title : action.payload,
                cards : [],
                id : `list-${listId}`
            };
            listId = state.length + 1;
            const newState =  [...state,newList];
            //updateDatabase(newState);
            storeLocally(newState);
            return newState;
        }

        //listId,d,a,t,img
        case CONSTANTS.ADD_CARD: {
            console.log('new card id is ' + cardId);
            const newCard = {
                id : `card-${cardId}`,
                designation : action.payload.d,
                title : action.payload.t,
                about : action.payload.a,
                image : action.payload.i

            };
        
            
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
           // updateDatabase(newState);
          
            cardId = CountCard(newState);
            storeLocally(newState);
            console.log('in add data : ', cardId);
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
                //updateDatabase(newState);
                storeLocally(newState);
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
            //updateDatabase(newState);
            storeLocally(newState);
            return newState;
        }

        default:
            return state;
    }
};

export default listsReducer;