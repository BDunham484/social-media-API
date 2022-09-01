//import the User model
const { User, Thought } = require('../models');

//create user controller object
const UserController = {
    //get all users
    getAllUsers(req, res) {
        User.find({})
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    //get user by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .then(dbUserData => {
                //if no user is found, send 404
                if (!dbUserData) {
                    res.status(404).json({ message: 'There is no user with this ID!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    //create a user
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    //update user by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate(
            { _id: params.id },
            body,
            { new: true }
        )
            .then(dbUserData => {
                //if no user is found, send 404
                if (!dbUserData) {
                    res.status(404).json({ message: 'There is no user with this ID!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // //delete user by id
    // deleteUser({ params }, res) {
    //     User.findOneAndDelete({ _id: params.id })
    //         .then(dbUserData => {
    //             //if no user is found, send 404
    //             if (!dbUserData) {
    //                 res.status(404).json({ message: 'There is no user with this ID!' });
    //                 return;
    //             }
    //             res.json(dbUserData);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             res.status(400).json(err);
    //         });
    // },
    //delete user by id
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(data => {
                console.log(data)
                return Thought.deleteMany(
                    { userName: data.userName },
                    { new: true } 
                )
            })
            .then(dbUserData => {
                //if no user is found, send 404
                if (!dbUserData) {
                    res.status(404).json({ message: 'There is no user with this ID!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    //add friend
    addFriend({ params }, res) {
        console.log(params)
        User.findOneAndUpdate(
            { _id: params.userId },
            { $push: { friends: params.friendId } },
            { new: true }
        )
        .then(dbUserData => {
            //if no thought is found, send 404
            if (!dbUserData) {
                res.status(404).json({ message: 'There is no thought with this ID!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    //delete friend by id
    removeFriend({ params }, res) {
        console.log(params)
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: params.friendId }},
            { new: true }
        )
        .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => res.json(err));
    }
};

//export User controller
module.exports = UserController;