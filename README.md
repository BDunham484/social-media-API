# <h1 align="center">social-media-API <br>[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)</h1>

## Technologies
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=plastic&logo=javascript&logoColor=%23F7DF1E)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=plastic&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=plastic&logo=mongodb&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=plastic&logo=insomnia&logoColor=5849BE)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=plastic&logo=node.js&logoColor=white)
![Mongoose](https://img.shields.io/badge/6.5.4-Mongoose-%23800000?style=plastic)
![Nodemon](https://img.shields.io/badge/Nodemon-4F4D3F?style=plastic&logo=nodemon)
![Technologies](https://img.shields.io/badge/-Git-F05032?logo=Git&logoColor=white)
![Technologies](https://img.shields.io/badge/-npm-%23323330?logo=npm&logoColor=white)


## Description: 

* The API for a social media site using MongoDB

![social-media-API](./assets/images/screenshot.png)

* <a href='https://powerful-journey-30948.herokuapp.com/'>https://powerful-journey-30948.herokuapp.com/</a>

## Table of Contents

- [Installation](#local-installation)
- [Usage](#usage)
- [Made With](#made-with)
- [Contributing](#contributing)

## Installation

* Run `npm init -y` from command line
* run `npm i` to install dependencies

![MVC-blogging-site](./assets/images/tech-blog-install.png)

Back to [top of page](# )

## Usage

* Run `npm start` from command line and test routes in Insomnia


## Insomnia Routes

![Insomnia](./assets/images/insomnia.png)

* ![ROUTES](https://img.shields.io/badge/GET-getAllUsers-blueviolet) <br>`http://localhost:3001/api/users`<br>
* ![ROUTES](https://img.shields.io/badge/GET-getUserById-blueviolet) <br>`http://localhost:3001/api/users/:userId`<br>
* ![ROUTES](https://img.shields.io/badge/GET-geAllThoughts-blueviolet) <br>`http://localhost:3001/api/thoughts`<br>
* ![ROUTES](https://img.shields.io/badge/GET-getThoughtById-blueviolet) <br>`http://localhost:3001/api/thoughts/:id`<br>
* ![ROUTES](https://img.shields.io/badge/POST-createUser-brightgreen) <br>`http://localhost:3001/api/users`<br>
* ![ROUTES](https://img.shields.io/badge/POST-addFriend-brightgreen) <br>`http://localhost:3001/api/users/:useId/friends/:friendId`<br>
* ![ROUTES](https://img.shields.io/badge/POST-addThought-brightgreen) <br>`http://localhost:3001/api/thoughts`<br>
* ![ROUTES](https://img.shields.io/badge/POST-addReaction-brightgreen) <br>`http://localhost:3001/api/thoughts/:thoughtId/reactions`<br>
* ![ROUTES](https://img.shields.io/badge/PUT-updateUser-orange) <br>`http://localhost:3001/api/users/:id`<br>
* ![ROUTES](https://img.shields.io/badge/PUT-updateThought-orange) <br>`http://localhost:3001/api/thoughts/:id`<br>
* ![ROUTES](https://img.shields.io/badge/DEL-deleteUser-fc0703) <br>`http://localhost:3001/api/users/:id`<br>
* ![ROUTES](https://img.shields.io/badge/DEL-removeFriend-fc0703) <br>`http://localhost:3001/api/users/:userId/friends/:frinedId`<br>
* ![ROUTES](https://img.shields.io/badge/DEL-deleteThought-fc0703) <br>`http://localhost:3001/api/thoughts/:userId/:thoughtId`<br>
* ![ROUTES](https://img.shields.io/badge/DEL-removeReaction-fc0703) <br>`http://localhost:3001/api/thoughts/:thoughtId/reactions/reactionId`<br>

Back to [top of page](# )

## Made With

* JavaScript
* Node.js
* Express.js
* Nodemon
* Mongoose
* MongoDB

## Made with ❤️ by:

* Brad Dunham

## Contributing

Feel free to submit an issue!

Back to [top of page](# )


