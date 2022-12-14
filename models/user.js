//import the Schema constructor and the model function from mongoose
const { Schema, model } = require('mongoose');

//create the schema for the model using the Schema constructor and outline the fields
const UserSchema = new Schema({
        userName: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [
                /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                "Please use a valid email address!",
            ]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

//get total count of thoughts on retrieval
UserSchema.virtual('thoughtCount').get(function () {
    return this.thoughts.length;
});
//get total count of friends on retrieval
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

//create the user model using the UserSchema
const User = model('User', UserSchema);

//export the User Model
module.exports = User;