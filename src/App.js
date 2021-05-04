import TrelloList from './components/TrelloList';
import {connect} from 'react-redux';
import TrelloActionButton from './components/TrelloActionButton';
import {DragDropContext,Droppable} from 'react-beautiful-dnd';
import {sort ,addState} from './actions';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import {useEffect} from 'react';




function App(props) {
  const {lists,dispatch} = props;
  //useEffect(() => {
    //dispatch(addState());
  //},[])
  const onDragEnd = result => {
    //TODO : reordering
    const {destination,source,draggableId,type} = result;
    if(!destination){
      return;
    }
    props.dispatch(sort(source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
      type));
  }
  return (
    <DragDropContext onDragEnd= {onDragEnd}>
    <div className="App">
      <h2><Typography >Trello Kanban Board</Typography></h2>
      <Droppable droppableId = "all-list" direction="horizontal" type = "list">
        {provided => (
          <ListContainer {...provided.droppableProps} ref ={provided.innerRef}>
       
          {lists.map((list,index) => <TrelloList listID = {list.id} index = {index}  key = {list.id} title = {list.title} cards = {list.cards}></TrelloList>)}
          <TrelloActionButton  list></TrelloActionButton>
      
          </ListContainer>  
        )

        }
      </Droppable> 
      
    </div>
    </DragDropContext>

  );
}
const mapStateToProps = state => ({
  lists : state.lists
});

const ListContainer = styled.div`
display : flex;
flexDirection : row;
marginRight : 10;
`;

export default connect(mapStateToProps) (App);
