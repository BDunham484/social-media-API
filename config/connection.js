const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social_db', {
    //mongoose configurations
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//export connection
module.exports = mongoose.connection;