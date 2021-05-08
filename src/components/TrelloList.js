import TrelloCard from './trelloCard';
import TrelloActionButton from './TrelloActionButton';
import {Droppable,Draggable} from 'react-beautiful-dnd';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';

const TrelloList = ({title , cards , listID, index}) => {
    return( 
        <Draggable draggableId = {String(listID)} index = {index}>
            {provided => (
                 <ListContainer className = {'listContainer'} {...provided.draggableProps} ref ={provided.innerRef} {...provided.dragHandleProps}>
                <Droppable droppableId = {String(listID)}>
                {provided => (
                    
                     <div className = {'container'} {...provided.droppableProps} ref= {provided.innerRef}>
                     <div className = {'text'}><Typography><CheckIcon fontSize = 'small'>
                         </CheckIcon>{title}</Typography>
                          <div className = {'numberWrapper'}>
                          <Typography className = {'CardsInList'}>{cards.length}</Typography>
                          </div>
                    </div>
                    <div className='cardContainer'>
                     {cards.map( (card,index) => <TrelloCard listTitle = {title} index = {index} key ={card.id} id = {card.id}  designation = {card.designation} title = {card.title} about = {card.about} image = {card.image} ></TrelloCard>)}
                    </div>
                     <div className = {'actionButton'}>
                     <TrelloActionButton listID = {listID} />
                     </div>
                     {provided.placeholder}
                     </div>
                     
                )}
           
            </Droppable>
            </ListContainer>

            )}
        </Draggable>
        
    );
};


const ListContainer = styled.div`
    
    .container{
        background-color : #dfe3e6;
        border-radius : 3px;
        width : 270px;
        padding : 8px;
        margin-right : 10px;
        overflow:hidden;
        height : auto;
        
    }
    .cardContainer {
        margin-bottom : 8px;
    }
    .text{
        display : flex;
        align-items: center;
        flex-direction : row;
        font-weight : bold;
        color : #6E6E6E;
        margin-bottom : 20px;
    }
   .numberWrapper{
       width : 20px;
       height:20px;
       margin-left : 10px;
   }
    .CardsInList {
        width: auto;
        line-height: 20px;
        color : white;
        text-align: center;
        border-radius : 2px;
        border: 2px solid #B4BBC4;
        
       
    }
  
   
  

   
`;

export default TrelloList;