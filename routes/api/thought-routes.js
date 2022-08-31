//import express.js router
const router = require('express').Router();
//import thought controllers
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

router  
    .route('/')
    .get(getAllThoughts)
    .post(addThought);


router
    .route('/:id')
    .put(updateThought)
    .get(getThoughtById);

router
    .route('/:userId')
    // .post(addThought);
    

router
    .route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(deleteThought);

router
    .route('/:thoughtId/:reactionId')
    .delete(removeReaction);

//export routes
module.exports = router;