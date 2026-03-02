Women Safety Platform
Overview

Women Safety Platform is a full-stack emergency response application designed to provide secure, real-time assistance during distress situations. The platform enables authenticated users to trigger SOS alerts with encrypted GPS location data, ensuring both responsiveness and data privacy.

The system is built using a modern MERN-style architecture with strong emphasis on authentication, encryption, and scalable API design.

Key Features
1. Secure Authentication

User registration and login system

Password hashing using bcrypt

JWT-based authentication for protected routes

Token-based access control for SOS functionality

2. Encrypted Emergency Alerts

Real-time GPS location capture via browser Geolocation API

AES encryption of latitude and longitude before transmission

Secure backend handling of distress data

3. Scalable RESTful Architecture

Modular Express.js backend

Organized route-controller structure

Environment-based configuration

Ready for integration with Redis and real-time services

4. Clean Frontend Architecture

React-based single-page application

React Router for navigation

Axios for secure API communication

Separation of concerns via modular components

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

JWT-based route protection

AES-256 encryption for sensitive data

Environment-based secret management

Project Structure
women_safety_platform/
│
├── client/                 # React frontend
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

The user can trigger an SOS request.

The browser captures GPS coordinates.

Coordinates are encrypted using AES before being processed.

The backend verifies JWT authentication before handling the request.

This ensures:

Secure identity verification

Encrypted sensitive data transmission

Protected emergency endpoints

Environment Configuration

Create a .env file inside the server directory with the following variables:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
AES_SECRET=your_encryption_secret

Make sure:

The MongoDB URI starts with mongodb:// or mongodb+srv://

Secrets are strong and not committed to version control

Installation and Setup
1. Clone Repository
git clone https://github.com/akshitajundiya/Women_Safety_Platform.git
cd women_safety_platform
2. Backend Setup
cd server
npm install
npm start

Backend runs on:

http://localhost:5000
3. Frontend Setup

Open a new terminal:

cd client
npm install
npm start

Frontend runs on:

http://localhost:3000
Security Considerations

The .env file must not be committed.

JWT tokens are required for accessing protected routes.

Passwords are securely hashed using bcrypt.

GPS location data is encrypted using AES before being processed.

Future Enhancements

Real-time tracking using WebSockets

Firebase push notifications

Redis-based session management

Deployment using AWS EC2 and Nginx

NLP-based emergency chatbot for intelligent triage

Author

Akshita Mina
B.Tech Computer Science and Engineering
Indian Institute of Information Technology, Nagpur
