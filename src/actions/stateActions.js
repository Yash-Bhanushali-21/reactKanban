import {CONSTANTS} from './index.js';
import axios from 'axios';

export const addState = () => {
    const url = "http://localhost:4000/";
    return (dispatch) => {
        return axios.get(`${url}fetchData`)
        .then(response => {
            console.log(response.data);
            return response.data
        })
        .then(data =>  {
            dispatch({
                type : CONSTANTS.STORE_DATA,
                payload : data[0].lists
            })
        })
        .catch(err => {
            throw(err);
        });
    };
};

