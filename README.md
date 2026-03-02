Women Safety Platform

This project is a full-stack emergency response system built to provide secure and rapid distress signaling with encrypted GPS transmission.

It uses React.js, Node.js, Express.js, MongoDB, JWT, bcrypt, and AES encryption to ensure secure authentication and protected emergency communication.

📌 Contents

User Registration & Login System

Password Hashing using bcrypt

JWT-Based Authentication

Protected API Routes

Real-time GPS Location Capture

AES Encrypted SOS Transmission

Modular Backend Architecture

RESTful API Design

🏗 Project Structure
women_safety_platform/
│
├── client/        # React frontend
├── server/        # Express backend
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── utils/
│
└── README.md
⚙ Technology Stack
Frontend

React.js

React Router

Axios

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

bcrypt Password Hashing

AES Encryption

🔐 Security Features

Hashed password storage

Token-based route protection

AES encryption for location data

Environment variable configuration

Middleware-level authentication checks

🚀 How to Run
1️⃣ Clone this repository
git clone https://github.com/akshitajundiya/Women_Safety_Platform.git
cd women_safety_platform
2️⃣ Backend Setup
cd server
npm install
npm start

Server runs on:

http://localhost:5000
3️⃣ Frontend Setup

Open a new terminal:

cd client
npm install
npm start

Frontend runs on:

http://localhost:3000
🔧 Environment Variables

Create a .env file inside the server directory:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
AES_SECRET=your_encryption_secret

Ensure:

MongoDB URI starts with mongodb:// or mongodb+srv://

Secrets are not committed to GitHub

📊 Application Flow

User registers an account

Password is securely hashed

JWT token is issued upon login

User triggers SOS

GPS location is captured

Coordinates are encrypted

Backend verifies token and processes alert

🎯 Future Improvements

Real-time tracking with WebSockets

Firebase push notifications

Redis-based session optimization

AWS deployment

Incident triage chatbot integration
