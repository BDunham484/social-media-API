//import the Schema constructor and the model function from mongoose
const { Schema, model } = require('mongoose');
//create the schema for the model using the Schema constructor and outline the fields
const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        min: 1,
        max: 280
    },
    createdAt: {
        
    }
})