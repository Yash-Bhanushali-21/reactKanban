import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import CheckIcon from '@material-ui/icons/Check';


const TrelloCard = ({ designation ,title , about , image , id , index , listTitle}) => {
  //const img_url = ""
    return(
      <Draggable draggableId = {String(id)} index = {index}>
        {provided => (
          <CardContainer ref = {provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            
           <Card className = {'card'}>
           <CardContent>
           <Typography  color="textSecondary" className = {'heading'} gutterBottom>
            {designation}
           </Typography>
           <Divider style = {{marginBottom : '10px'}} />
           <div className = {'content'}>
             
              <img className = {'img'} src = {image} ></img>
              
              <Typography color = 'textSecondary' >
               <div className = {'wrapper'} >
                 <h2 className ={'title'}>{title}</h2>
                 <p className = {'paragraph'}>{about}</p>
               </div>
              </Typography>
           
           </div>
           <div className="footer">
           {listTitle === 'Review'?<Typography color = 'error' className={'footer'}><WhatshotIcon/>Under Review</Typography>:null}
            {listTitle === 'Shortlisted'?
              <Typography color = 'textPrimary' className={'footer'}><CheckIcon/>Shortlisted</Typography>
            :null
            }
           </div>
           </CardContent>
           
           </Card>
           
         
           </CardContainer>
        )}
       
          </Draggable>
         
    );
}


const CardContainer = styled.div`
  .card{
    padding : 0px;
    width: 100%;
    margin-bottom : 10px;
    height: auto;
    
  }
  
  .heading {
    text-align:center;
    font-weight : bold;
    color : black;
  }
  .content {
    display:flex;
    flex-direction : row;
    align-items :center;
    height: 60px;
    margin: 10px 0 10px;
  }
  .img {
    flex : 0 0 50px;
    height:50px;
    border-radius : 50%;
    
  }
  .wrapper{
    padding : 10px;
  }
  .title {
    font-size : 15px;
    color : black;
    line-height : 5px;
    font-weight :bold;
  }
  .paragraph{
    display : flex;
    color : black;
    flex-direction : column;
    line-height : 15px;
    font-size : 12px;
    overflow : hidden;
    text-overflow : ellipsis;
    display: -webkit-box;
    -webkit-line-clamp : 2;
    -webkit-box-orient:vertical;
  }
  .footer{
    display:flex;
    align-items:center;
    line-height : 15px;
    font-size : 12px;
    

    
  }
  

  
`;

export default TrelloCard;