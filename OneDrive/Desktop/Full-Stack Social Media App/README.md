# Full-Stack Social Media Application

## Overview

Welcome to our Full-Stack Social Media Application! This project utilizes ReactJS and Tailwind CSS for the frontend, and NodeJS, ExpressJS, and MongoDB for the backend. The application is designed to be fully responsive, offering a seamless user experience. The project encompasses both the frontend (UI Design) and backend (Server).

## Functionalities

1. **User Authentication and Authorization**
2. **Email Verification**
3. **Password Reset**
4. **Create Post**
5. **Advanced Comment System (comments with sub-comments)**
6. **Like Post and Comments**
7. **Delete Post**
8. **Friend Request (send request, accept, or deny)**
   ... and others.

## Getting Started

### Backend (Server)

1. **Navigate to the Server Directory**
   - Move to the server directory using the command: `cd server`

2. **Create a .env file**
   - Create a `.env` file in the server directory and add the following variables:

      i. `MONGODB_URL` = `database connection string`

      ii. `JWT_SECRET_KEY` = `your secret key`
     
      iii. `PORT` = `8800`
      
      iv. `AUTH_EMAIL` = `email address`
      
      v. `AUTH_PASSWORD` = `email access password`
      
      vi. `APP_URL` = `http://localhost:8800/`

      Note: We recommend using a Hotmail account to send verification emails, as it is reliable and requires no additional configuration. Also, remember to change `API_URL` when deploying your app or use localhost with the appropriate `port number`.

3. **Install Dependencies**
   - Run `npm install` to install the required packages.

4. **Start the Server**
   - Run `npm start` to start the server.

### Views File

1. **React App for Email Verification and Password Reset**
   - The `views` folder contains static HTML files for email verification and password reset.
   - Navigate to the folder, install its dependencies, make necessary changes, and run the build.
   - Copy the `build` folder into the `view` folder in the `server` directory, overriding the existing one.
   
   Note: During deployment, ensure you update the various links in the view file, rebuild, and replace the files in the view folder of the server.

### Client Side

1. **Create a .env file**
   - In the root folder of the client, create a `.env` file and add an environment variable named `REACT_APP_CLOUDINARY_ID`. This variable will store the Cloudinary cloud name.

2. **Install Dependencies**
   - Run `npm install` to install all client-side dependencies.