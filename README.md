# <h1 align="center">social-media-API <br>[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)</h1>

## Technologies 🤖

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=plastic&logo=javascript&logoColor=%23F7DF1E)
![Git](https://img.shields.io/badge/-Git-F05032?style=plastic&logo=Git&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=plastic&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/-npm-%23323330?style=plastic&logo=npm&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=plastic&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=plastic&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/6.5.4-Mongoose-%23800000?style=plastic)
![Nodemon](https://img.shields.io/badge/Nodemon-4F4D3F?style=plastic&logo=nodemon)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=plastic&logo=insomnia&logoColor=5849BE)

## Description: 

The API for a social media site using MongoDB.  CRUD methods can be run on users, thoughts, and reactions via routes and controllers in Insomnia. There is a User and Thought model.  Reactions are a subdocument of thoughts.  

![social-media-API](./assets/images/screenshot.png)


* <a href="https://drive.google.com/file/d/1-3tLx2f7EOhikivrF1LMj2g-ZJccb1wo/view">Walkthrough Video: Part-1</a>
* <a href="https://drive.google.com/file/d/1OibIzO5kFVBNF-8q0txcEgYyu3Edl2Pf/view">Walkthrough Video: Part-2</a>

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Insomnia Routes](#insomnia-routes)
- [Made With](#made-with)


## Installation

* Make sure MongoDB is installed locally
* Run `npm init -y` from command line
* run `npm i` to install dependencies

Back to [top of page](# )

## Usage

* Run `npm start` from command line and test routes in Insomnia


## Insomnia Routes

![Insomnia](./assets/images/insomnia.png)

* ![getAllUsers](https://img.shields.io/badge/GET-getAllUsers-blueviolet) <br>`http://localhost:3001/api/users`
* ![getUserById](https://img.shields.io/badge/GET-getUserById-blueviolet) <br>`http://localhost:3001/api/users/:userId`
* ![getAllThoughts](https://img.shields.io/badge/GET-geAllThoughts-blueviolet) <br>`http://localhost:3001/api/thoughts`
* ![getThoughtsById](https://img.shields.io/badge/GET-getThoughtById-blueviolet) <br>`http://localhost:3001/api/thoughts/:id`
* ![createUser](https://img.shields.io/badge/POST-createUser-brightgreen) <br>`http://localhost:3001/api/users`
* ![addFriend](https://img.shields.io/badge/POST-addFriend-brightgreen) <br>`http://localhost:3001/api/users/:userId/friends/:friendId`
* ![addThought](https://img.shields.io/badge/POST-addThought-brightgreen) <br>`http://localhost:3001/api/thoughts`
* ![addReaction](https://img.shields.io/badge/POST-addReaction-brightgreen) <br>`http://localhost:3001/api/thoughts/:thoughtId/reactions`
* ![updateUser](https://img.shields.io/badge/PUT-updateUser-orange) <br>`http://localhost:3001/api/users/:id`
* ![updateThought](https://img.shields.io/badge/PUT-updateThought-orange) <br>`http://localhost:3001/api/thoughts/:id`
* ![deleteUser](https://img.shields.io/badge/DEL-deleteUser-fc0703) <br>`http://localhost:3001/api/users/:id`
* ![removeFriend](https://img.shields.io/badge/DEL-removeFriend-fc0703) <br>`http://localhost:3001/api/users/:userId/friends/:frinedId`
* ![deleteThought](https://img.shields.io/badge/DEL-deleteThought-fc0703) <br>`http://localhost:3001/api/thoughts/:userId/:thoughtId`
* ![removeReaction](https://img.shields.io/badge/DEL-removeReaction-fc0703) <br>`http://localhost:3001/api/thoughts/:thoughtId/reactions/reactionId`

Back to [top of page](# )

## Made With

* JavaScript
* Node.js
* Express.js
* Nodemon
* Mongoose
* MongoDB

### Made with ❤️ by  Brad Dunham

Back to [top of page](# )


