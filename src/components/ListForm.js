import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import {useState} from 'react';
import {addList } from "../actions";
import styled from 'styled-components';
import Textarea from 'react-textarea-autosize';
import Icon from '@material-ui/core/Icon';
const ListForm = (props) => {
    const [hasListName,setListName] = useState('');
    
    const changeHandler = e => {
        setListName(e.target.value);
    }
    const resetState = () => {
        setListName('');
    }
    const listSubmitHandler = e => {
        const {dispatch} = props;
        if(hasListName){
            dispatch(addList(hasListName));
            resetState();
        }
        return;
    }
    
    return (
       <Wrapper>
        <div className = {'container'}>
            <Card className = {'card'}>
            <Textarea placeholder={'Enter List Title'} className = {'textArea'} autoFocus onBlur = {props.closeListForm} onChange = {changeHandler} />
            </Card>
        </div>
        <div className={'buttonGroup'}>
        <Button className = {'button'} onMouseDown = {listSubmitHandler} variant = "contained">Submit</Button>
        <Icon className = {'icon'} onMouseDown = {props.closeListForm}>close</Icon>
        </div>
        </Wrapper>



    );
}


const Wrapper =  styled.div`

.button {
    color:white;
    background-color : #dfe3e6;
    height:30px;
}
.buttonGroup {
    display : flex;
    flex-direction : row;
    align-items : center;
    margin-top : 5px;
}
.icon {
    cursor : pointer;
    margin-left:  5px;
}
.card{
    min-height:35px;
    min-width:272px;
    padding : 6px 8px 2px;
}
.textArea{
    resize : none;
    width: 100%;
    overflow : hidden;
    outline : none;
    border:none;
}
`;

export default ListForm;