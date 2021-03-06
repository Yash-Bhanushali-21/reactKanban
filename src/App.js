import TrelloList from './components/TrelloList';
import {connect} from 'react-redux';
import TrelloActionButton from './components/TrelloActionButton';
import {DragDropContext,Droppable} from 'react-beautiful-dnd';
import {sort ,addState,resetState} from './actions';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import {useEffect} from 'react';
import {initialData} from './reducers/initialData';
import Button from '@material-ui/core/Button';





function App(props) {
  const {lists,dispatch} = props;
  useEffect(() => {
    if(localStorage.getItem('state') === null){
      dispatch(resetState());
    }
    else{
      dispatch(addState(JSON. parse(localStorage.getItem('state'))));
    }
  },[])

  const handleReset = () => {
    localStorage.clear();
    dispatch(resetState(initialData));

  }
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
      <Button  style = {styles.button}onClick = {handleReset}>RESET</Button>
      <Droppable droppableId = "all-list" direction="horizontal" type = "list">
        {provided => (
          <ListContainer {...provided.droppableProps} ref ={provided.innerRef}>
       
          {lists.map((list,index) => <TrelloList className = {'listItem'} listID = {list.id} index = {index}  key = {list.id} title = {list.title} cards = {list.cards}></TrelloList>)}
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

const styles = {
  button : {
    color:'white',
    backgroundColor : '#dfe3e6',
    height:'30px',
    marginBottom:'20px'
}
}
const ListContainer = styled.div`
display : flex;
flex-direction : row;
`;

export default connect(mapStateToProps) (App);
