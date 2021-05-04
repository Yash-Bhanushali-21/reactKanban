const mongoose = require('mongoose');
const stateSchema = new mongoose.Schema({

    type : String,
    lists : 
    [
    
        {
        title :String,
         id : String,
         cards : [{ 
                      id : String,
                      designation : String, 
                      title : String, 
                      about: String,
                      image : String
                }]
        }
    ]
})

module.exports = mongoose.model('StateObject',stateSchema);