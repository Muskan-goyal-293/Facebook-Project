# Facebook-Project
# MERN Social Media App

A full stack social media application built using the MERN Stack.

## Features

* User Registration & Login
* JWT Authentication
* Protected Routes
* Create Post
* Upload Image
* Like & Dislike Post
* User Profile
* View User Details
* Context API State Management
* REST API

---

# Tech Stack

## Frontend

* React JS
* React Router DOM
* SCSS
* Axios
* Context API

## Backend

* Node JS
* Express JS
* MongoDB
* Mongoose
* JWT
* Bcrypt
* Multer
* ImageKit

---

# Folder Structure

```bash
client/
│
├── src/
│   ├── Api/
│   ├── Components/
│   ├── Context/
│   ├── Hook/
│   ├── Pages/
│   ├── Style/
│   └── App.jsx
│
server/
│
├── Middleware/
├── Model/
├── Route/
├── Controller/
├── database/
└── server.js
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/Muskan-goyal-293/Facebook-Project.git
```

---

# Backend Setup

```bash
cd server
npm install
```

Create `.env` file inside server folder.

```env
PORT=3000
MONGO_URL=your_mongodb_url
JWT_SECRET=your_secret_key
IMAGEKIT_PRIVATE_KEY=your_private_key
```

Run backend:

```bash
npx nodemon server.js
```

---

# Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

# Authentication

* Password hashing using bcrypt
* JWT token authentication
* Cookies based authentication
* Protected routes using middleware


# Author

Made with ❤️ using MERN Stack.
