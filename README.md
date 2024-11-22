# Catalog Dashboard Backend

The backend for the **Catalog Dashboard** application is built with **NestJS** and uses **MongoDB** for database storage. It provides a REST API for managing catalogs, including CRUD operations, and includes a script to load mock catalogs into the database for development or testing purposes.

---

## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Prerequisites](#prerequisites)
4. [Installation and Setup](#installation-and-setup)
5. [API Endpoints](#api-endpoints)
6. [Development](#development)
7. [Mock Data Loading](#mock-data-loading)
8. [Screenshots](#screenshots)

---

## Features
- RESTful API to manage catalogs (Add, Delete, Update, View).
- MongoDB for data storage.
- `loadMockData.ts` script to populate the database with sample catalogs.
- Modular and scalable codebase using **NestJS**.

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
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd backend

2. Install dependencies:
   ```npm install

3. Set up the environment variables: Create a .env file in the backend directory with the following:
   CONNECTION_STRING=mongodb://localhost:27017/catalog-dashboard
   PORT=3000

5. OPTIONAL: if you want to pre-load several catalogs, run the command:
   ```npm run load-data

4. run the backend:
  ```cd backend
  ```npm start
