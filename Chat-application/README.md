# Chat Application
[![Built with React](https://img.shields.io/badge/Built%20with-React-blue)](https://reactjs.org/)
[![Built with nodejs](https://img.shields.io/badge/Built%20with-Nodejs-green)](https://reactjs.org/)
[![Built with MongoDb](https://img.shields.io/badge/Built%20with-MongoDB-yellow)](https://reactjs.org/)
## Description
The Chat Application is a web-based application that emulates the core features and functionality of the popular Social media 
 application, Facebook. This README file provides an overview of the project, installation instructions, and other relevant information.

## Live Demo

Checkout the live version of Chat Application website [Here](https://diana-nyamai.github.io/Chat-application/)
## Technologies used

Frontend: 
- ![ReactJS](https://img.shields.io/badge/-ReactJS-blueviolet)
- ![Sass](https://img.shields.io/badge/-Sass-pink)
- ![Css](https://img.shields.io/badge/-Css-orange)
- ![HTML](https://img.shields.io/badge/-HTML-blue)

Backend
- ![nodejs](https://img.shields.io/badge/-NodeJs-green)
- ![express](https://img.shields.io/badge/-ExpressJs-white)
- ![mongodb](https://img.shields.io/badge/-MongoDB-green)

## Installation

To use Chat Application on your local machine, follow these steps:

1. clone the repository
  ```
  git clone https://github.com/Diana-nyamai/Chat-application.git
  ```
2. install the dependencies
  ```
   cd Whatsapp-Clone
  ```
  ```
  npm install
  ```
3. start the server
  ```
   npm start
  ```
4. Access the application
  - Open your browser and visit `http://localhost:3000`

### Backend Installation Guide

To set up the backend server for the Chat Application on your local machine, follow these steps:

1. Make sure you have Node.js and MongoDB installed on your system. If you don't have them, you can download and install them from their official websites.
2. Change into the backend directory:
```
cd RESTapi
```
3. Install the required dependencies:
```
npm install
```
4. Configure the MongoDB connection:

- Open the `.env` file located in the backend directory.
- Replace <MONGO_URL> with the MongoDB connection string. If you are running MongoDB locally, the connection string might look like:
- "mongodb+srv://`<username>:<password>`@cluster0.sjtdtdy.mongodb.net/`<databaseName>`?retryWrites=true&w=majority."
5. Start the backend server:
```
npm start
```
6. By default, the backend server will run on port 5000. If you want to change the port, you can modify the PORT constant in the index.js file.

7. The backend server is now up and running. You can now access the full Chat Application by visiting http://localhost:3000 in your browser (assuming the frontend is running on port 3000).

Note: If you encounter any issues during the installation process, please refer to the project documentation or open an issue in the repository.

## Additional Notes
It is essential to remember that the backend installation assumes you have MongoDB installed and running on your system. Also, make sure the frontend and backend configurations match (e.g., the frontend should be configured to make API calls to the correct backend URL). With both the frontend and backend running, you should be able to use the Chat Application on your local machine. Happy chatting!
## Contribution

Contributions are welcome! If you have any suggestions for improvements, please open an issue or submit a pull request to the repository

## Contact Information

For any inquiries, please contact the project maintainer at [dnyamai.dn@gmail.com]
