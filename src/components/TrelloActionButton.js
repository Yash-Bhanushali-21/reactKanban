import Icon from '@material-ui/core/Icon';
import {useState} from 'react';
import CardForm from './CardForm';
import ListForm from './ListForm';
import {connect} from "react-redux";



const TrelloActionButton = (props) => {
    //states of all the important parameters
    const [isFormOpen ,setFormOpen] = useState(false);
    const [isListFormOpen,setListFormOpen] = useState(false);

    
    //form handlers
    const openForm = () => setFormOpen(true);
    const closeForm = () => setFormOpen(false);

    //listForm handlers
    const openListForm = () => setListFormOpen(true);
    const closeListForm = () => setListFormOpen(false);
   


    const renderAddButton = () => {
        const {list} = props;
        const buttonText = list ? "Add another list" : "Add another card";
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor  = list ? "white" : "inherit";
        const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

        return (
            <div style = {{
                ...styles.openForButtonGroup,
                opacity : buttonTextOpacity,
                color : buttonTextColor,
                backgroundColor : buttonTextBackground
            }}
            onClick = {() => list?openListForm():openForm()}
            >
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        );
    }

    const renderForm = () => {
        const {list , dispatch , listID} = props;
        const buttonTitle = list ? "Add List" : "Add Button";
        //designation , title , about , image

        return(list ?  <ListForm  dispatch = {dispatch} closeListForm = {closeListForm} />:<CardForm dispatch={dispatch} listID = {listID} closeForm = {closeForm} />)
    }

    return (isFormOpen || isListFormOpen) ? renderForm() : renderAddButton();


}

const styles = {
    openForButtonGroup : {
        display : "flex",
        alignItems : 'center',
        cursor : 'pointer',
        borderRadius : '3',
        height : 36,
        width : 272,
        paddingLeft : 10
    },
    form : {
        display : "flex",
        alignItems : 'center',
        flexDirection : "column",

    },
    formElements : {
        marginBottom : 10
    },
    heading : {
        fontWeight : 'bold'
    }

}

export default connect() (TrelloActionButton);