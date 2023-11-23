# SweetClick Backend Project

This project contains the backend implementation for managing cakes using a RESTful API. The API is built using Node.js, Express, and MongoDB.

## Getting Started

To get started with the project, follow these steps:

1. Clone the project repository to your local machine: `git clone git@github.com:penkaldci/final-project-backend.git`.
2. Navigate to the server directory `cd server`.
3. Install the project dependencies by running `npm install`. The following dependencies are used in this project:

- `bcrypt`: ^5.1.1
- `cors`: ^2.8.5
- `dotenv`: ^16.3.1
- `express`: ^4.18.2
- `express-validator`: ^7.0.1
- `http-status-codes`: ^2.3.0
- `jsonwebtoken`: ^9.0.2
- `mongoose`: ^8.0.0
- `validator`: ^13.11.0

   - Run `npm install cors dotenv express http-status-codes mongoose bcrypt express-validator jsonwebtoken validator
` to install them.

5. # Development Dependencies

These are the dependencies that are required to run the project in development mode.

- nodemon

To install run `npm install nodemon --save-dev`.

Than run in terminal `nodemon server.js`

You will need to have Node.js and MongoDB installed on your machine to run the project. It is also recommended to use an environment variable package like dotenv to manage sensitive information like database credentials.
