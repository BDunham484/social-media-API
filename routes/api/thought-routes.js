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
    .route('/:userId/:thoughtId')
    .delete(deleteThought);

router
    .route('/:thoughtId/reactions')
    .post(addReaction)
    // .delete(removeReaction);

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);


//export routes
module.exports = router;