const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const StateObject = require('./model.js');
const mongoose = require('mongoose');

//database connection with mongo running on localhost/27017
mongoose.connect('mongodb://localhost/27017',{useNewUrlParser: true})
const db = mongoose.connection

//check for connection establishment
db.on('error',(error) => console.log(error) )
db.once('open',() => console.log('database connected'))

//app cors for avoiding localhost fetch issues which is blocked by chrome.
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//initial dummy data .
const initialData = [
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
//dump the data in schema object only if its not pre-existing.

StateObject.find({type : 'state'}).then((res) => {

    if(res.length > 0 ){
        console.log('the data already exists');
    }
    else{
        const initialDataObject = new StateObject({type : 'state',lists : initialData});
        initialDataObject.save((error) => {
        if(error){
        console.log("error occured in object store"); 
        }
        else{
        console.log(StateObject);
        console.log("initialDataObject stored successfully");
        }
    });

    }
});


//different routes on our REST API.
app.get('/',(req,res) => {
    res.send('we are home');
});
app.get('/fetchData',async (req,res) => {
    const data = await StateObject.find({type : 'state'});
    res.send(data);
    
});
app.post('/updateDatabase',async (req,res) => {
    
    console.log('printing req.body');
    console.log(req.body)
    console.log('ending print of req.body');
    StateObject.updateOne({type : 'state'},{$set : {lists : req.body.stateObject}})
    .then((res) => {
        console.log('updated');
    })
    .catch(err => console.log('error is detected'));
   
})


//listening to port 4000.
app.listen(4000);