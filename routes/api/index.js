//import express.js router
const router = require('express').Router();
//import user-routes
const userRoutes = require('./user-routes');

//add prefix of '/user' to routes created in 'user-routes.js'
router.use('/user', userRoutes);

//export routes
module.exports = router;