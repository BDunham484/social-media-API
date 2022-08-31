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
            type: Date,
            default: Date.now,
        },
        userName: {
            type: String,
            required: true
        },
        reactions: []
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

//get total count of thoughts and reactions on retrieval
ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

//create the thought model using the ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

//export the Thought Model
module.exports = Thought;