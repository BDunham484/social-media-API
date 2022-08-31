//import the mongoose package
const mongoose = require('mongoose');
//establich database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social_db', {
    //mongoose configurations
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//use this to log mongo queries being executed!
mongoose.set('debug', true);

//export connection
module.exports = mongoose.connection;