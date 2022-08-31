//import the Thought model
const { Thought, User } = require('../models');

//create the controller object
const ThoughtController = {
    //get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    //get thought by id
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
            .then(dbThoughtData => {
                //if no thought is found, send 404
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'There is no thought with this ID!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    //create a thought
    addThought({ params, body }, res) {
        console.log(body)
        Thought.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: body.userId },
                    { $push: { thoughts: _id }},
                    { new: true }
                );
            })
            .then(dbThoughtData => {
                //if no thought is found, send 404
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'There is no thought with this ID!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    //update thought by id
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.id },
            body,
            { new: true }
        )
            .then(dbThoughtData => {
                //if no thought is found, send 404
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'There is no thought with this ID!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    //delete thought by id
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.thoughtId })
            .then(deletedThought => {
                if (!deletedThought) {
                    return res.status(404).json({ message: 'No thought with this ID!' });
                }
                return User.findOneAndUpdate(
                    { _id: params.userId },
                    { $pull: { thoughts: params.thoughtId }},
                    { new: true }
                );
            })
            .then(dbThoughtData => {
                //if no thought is found, send 404
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'There is no thought with this ID!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
};

//export Though controller
module.exports = ThoughtController;