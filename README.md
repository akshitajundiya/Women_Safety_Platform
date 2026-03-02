Women Safety Platform
Overview

Women Safety Platform is a full-stack emergency response application designed to provide secure, real-time assistance during distress situations. The platform enables authenticated users to trigger SOS alerts with encrypted GPS location data, ensuring both rapid response and data privacy.

The system follows a modern full-stack architecture with strong emphasis on authentication, encryption, and scalable API design.

Key Features
Secure Authentication

User registration and login system

Password hashing using bcrypt

JWT-based authentication

Protected API routes

Encrypted Emergency Alerts

Real-time GPS capture via browser Geolocation API

AES encryption of latitude and longitude

Secure backend handling of distress data

Scalable RESTful Architecture

Modular Express.js backend

Organized route-controller structure

Environment-based configuration

Easily extendable for Redis and real-time services

Frontend Architecture

React-based single-page application

React Router for structured navigation

Axios for secure API communication

Clean modular component structure

Tech Stack
Frontend

React.js

React Router DOM

Axios

Backend

Node.js

Express.js

MongoDB (Mongoose ORM)

JWT Authentication

bcrypt Password Hashing

AES Encryption (crypto-js)

Security

Token-based authentication

AES encryption for sensitive data

Environment-based secret management

Project Structure
women_safety_platform/
│
├── client/                 # React frontend
│
├── server/                 # Express backend
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── utils/
│
└── README.md
How It Works

A user registers and logs into the platform.

The backend hashes the password and issues a JWT token upon successful login.

The user triggers an SOS request.

The browser captures GPS coordinates.

Coordinates are encrypted using AES before processing.

The backend verifies authentication before handling the request.

This ensures:

Secure identity verification

Encrypted transmission of sensitive data

Protected emergency endpoints

Environment Configuration

Create a .env file inside the server directory:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
AES_SECRET=your_encryption_secret

Important:

The MongoDB URI must start with mongodb:// or mongodb+srv://

Use strong secrets

Never commit the .env file

Installation and Setup
Clone Repository
git clone https://github.com/akshitajundiya/Women_Safety_Platform.git
cd women_safety_platform
Backend Setup
cd server
npm install
npm start

Backend runs on:

http://localhost:5000
Frontend Setup

Open a new terminal:

cd client
npm install
npm start

Frontend runs on:

http://localhost:3000
Security Considerations

Passwords are hashed using bcrypt

JWT tokens protect sensitive endpoints

GPS data is encrypted using AES

Environment variables are used for secrets

Future Enhancements

Real-time tracking using WebSockets

Firebase push notifications

Redis-based session management

AWS deployment with Nginx

NLP-based emergency chatbot for intelligent triage

Author

Akshita Mina
B.Tech Computer Science and Engineering
Indian Institute of Information Technology, Nagpur
