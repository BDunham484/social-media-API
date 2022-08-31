//import express.js router
const router = require('express').Router();
//import user-routes
const userRoutes = require('./user-routes');
//import thought-routes
const thoughtRoutes = require('./thought-routes');

//add prefix of '/users' to routes created in 'user-routes.js'
router.use('/users', userRoutes);
//add prefix of '/thoughts' to routes created in 'thought-routes.js'
router.use('/thoughts', thoughtRoutes)

//export routes
module.exports = router;