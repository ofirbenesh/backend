# Catalog Dashboard Backend

The backend for the **Catalog Dashboard** application is built with **NestJS** and uses **MongoDB** for database storage. It provides a REST API for managing catalogs, including CRUD operations, and includes a script to load mock catalogs into the database for development or testing purposes.

To main repository: https://github.com/ofirbenesh/catalog-dashboard.git
---

## Features
- RESTful API to manage catalogs (Add, Delete, Update, View).
- MongoDB for data storage.
- `loadMockData.ts` script to populate the database with sample catalogs.
- Modular and scalable codebase using **NestJS**.
  
<img width="681" alt="image" src="https://github.com/user-attachments/assets/ca59b456-2642-4f03-a0db-2f38de867308">

 - mongoDB:
<img width="681" alt="image" src="https://github.com/user-attachments/assets/7cb46cd0-d696-425c-820a-fbc7969abd4f">


---

## Technologies Used
- **NestJS**: Framework for building scalable server-side applications.
- **TypeScript**: Strict typing for safer and cleaner code.
- **MongoDB**: NoSQL database for storing catalog data.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB.
- **ts-node**: For executing TypeScript files.

---

## Prerequisites
Make sure you have the following installed:
- **Node.js** (v18 or later)
- **npm** (v8 or later)
- **MongoDB** (running locally or hosted)

---

## Installation and Setup
```bash
# Clone this repository.
$ git clone https://github.com/ofirbenesh/catalog-dashboard.git

# For running the backend - go to repository
$ gh repo clone ofirbenesh/backend

# Install dependencies:
$ npm install
$ npm install mongoose
$ npm install --save-dev @types/mongoose

# make sure you are connected to MongoDB
"connectionString": "mongodb://localhost:27017/"

# Optional: if you want to preload Mock data into the DB to see how the table looks like with catalogs
# run the script:
$ cd backend/src/scripts
$ npm run load-data

# start the server.
$ cd backend
$ npm start

# For running the Client - go back to this repository
$ cd catalog-dashboard
$ npm start
```
The frontend will run on http://localhost:3001.
The backend will run on http://localhost:3000.
