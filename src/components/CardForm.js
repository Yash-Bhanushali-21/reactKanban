import {useState} from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {connect} from "react-redux";
import {addCard } from "../actions";
import styled from "styled-components";
import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';



const CardForm = (props) => {
    const [isDesignated,setDesignation] = useState('');
    const [hasAbout,setAbout] = useState('');
    const [hasName,setName] = useState('');
    const img_url = "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80";


    //state event handlers
    const handleDesignationChange = (e) => {
        setDesignation(e.target.value);
    }
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleAboutChange = (e) => {
        setAbout(e.target.value);
    } 
    
    //reset states after stateful changes.
    const resetStates = () => {
        setDesignation('');
        setName('');
        setAbout('');
    }
    const onSubmit = () => {
         
         const {dispatch,listID} = props;
         if(isDesignated && hasAbout && hasName){
             console.log('dispatched')
            dispatch(addCard(listID,isDesignated,hasAbout,hasName,img_url));
            resetStates();
        }
      
       // props.closeForm();
        return;
    }


    return (
        <FormWrapper>
             <Card className = {'card'}>
            <CardContent >
            <form className = {"form"} noValidate autoComplete="off">
            <Typography  color="textSecondary" className = {'heading'} gutterBottom>
           New Card
          </Typography>
         
            <TextField  
            className = {'formElements'}
            inputProps = {{style : {fontSize : '15px'}}}
             onChange = {handleDesignationChange} variant="outlined" size="small" label="designation" />
            
            <TextField
             className = {'formElements'} 
             onChange = {handleNameChange}
             variant="outlined"
             inputProps = {{style : {fontSize : '15px'}}}
             size="small"
             label="name" />
            <TextField 
            className = {'formElements'} 
            onChange = {handleAboutChange}
            variant="outlined"
            inputProps = {{style : {fontSize : '15px'}}}
            size="small"
            label="about"  />
            </form>
            <div className={'buttonGroup'}>
            <Button  className = {'button'} onMouseDown = {onSubmit} >Submit</Button>
            <Icon className={'icon'} onMouseDown = {props.closeForm} >close</Icon>
            </div>
            </CardContent>
            
            </Card>
            
           
            </FormWrapper>
        
    );

}


const FormWrapper  = styled.div`

.form{
    display : flex;
    align-items : center;
    flex-direction : column;

}
.formElements{
    margin-bottom : 10px;
   
}
.heading {
    font-weight : bold;
}
.button {
    color:white;
    background-color : #dfe3e6;
    height:30px;
    margin-left:20px;
}
.buttonGroup {
    display : flex;
    flex-direction : row;
    align-items : center;
    margin-top : 5px;
    
}
.icon {
    cursor : pointer;
    margin-left : 5px;
}

`
;
export default connect() (CardForm);