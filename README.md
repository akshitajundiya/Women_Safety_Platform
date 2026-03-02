Women Safety Platform

A secure, full-stack emergency response system built to enable rapid distress signaling with encrypted location transmission and authenticated access control.

This platform is designed with production-grade backend structure, modular architecture, and security-first principles.

System Objective

The Women Safety Platform provides:

Authenticated user access

One-click SOS alert triggering

Encrypted GPS coordinate handling

Secure REST API architecture

Scalable backend design

The system prioritizes data security, authentication integrity, and clean architectural separation between client and server.

Core Capabilities
Authentication & Access Control

Secure user registration and login

Password hashing using bcrypt

JWT-based session authentication

Middleware-protected routes

Encrypted Emergency Signaling

Real-time GPS capture via browser API

AES-based encryption of latitude and longitude

Protected SOS endpoint

Secure request validation pipeline

Backend Architecture

Modular Express.js structure

Controller-based request handling

Mongoose-based data modeling

Environment-based configuration

Production-ready folder structure

Frontend Architecture

React single-page application

React Router-based navigation

Axios-based API communication

Token storage for authenticated requests

Technology Stack

Frontend

React.js

React Router

Axios

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT

bcrypt

crypto-js (AES encryption)

Project Structure
women_safety_platform/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── pages/
│   │   └── App.js
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
└── README.md

This separation ensures maintainability, scalability, and ease of extension.

Application Flow

User registers an account.

Password is hashed and stored securely.

User logs in and receives a JWT token.

Token is attached to protected API requests.

User triggers SOS.

Browser captures GPS location.

Coordinates are encrypted using AES.

Backend verifies JWT and processes the request.

Security is enforced at every critical interaction layer.

Environment Configuration

Create a .env file inside the server directory:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
AES_SECRET=your_encryption_secret

Important:

Use strong secret keys.

Do not commit .env.

Ensure MongoDB URI starts with mongodb:// or mongodb+srv://.

Installation Guide
Clone the Repository
git clone https://github.com/akshitajundiya/Women_Safety_Platform.git
cd women_safety_platform
Backend Setup
cd server
npm install
npm start

Server runs on:
http://localhost:5000

Frontend Setup

Open a new terminal:

cd client
npm install
npm start

Client runs on:
http://localhost:3000

Security Design Principles

No plaintext password storage

Token-based authentication

Encrypted sensitive data transmission

Environment variable secret management

Protected API routing

Scalability Roadmap

Redis-based session optimization

WebSocket-based real-time tracking

Firebase push notifications

Cloud deployment (AWS / Docker)

Incident triage chatbot integration

Engineering Focus

This project emphasizes:

Clean separation of concerns

Security-first API design

Maintainable folder structure

Extensible architecture

Interview-ready backend logic

Author

Akshita Mina
B.Tech Computer Science and Engineering
Indian Institute of Information Technology, Nagpur
