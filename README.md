Women Safety Platform

This project is a full-stack emergency response system built to provide secure and rapid distress signaling with encrypted GPS transmission.

It uses React.js, Express.js, Node.js, MongoDB, JWT, bcrypt, and AES encryption to ensure secure authentication and protected emergency communication.

📌 Contents

User registration and login

Password hashing with bcrypt

JWT-based authentication

Protected API routes

Real-time GPS capture

AES encrypted SOS transmission

Modular backend architecture

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
🔧 Environment Configuration

Create a .env file inside the server directory:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
AES_SECRET=your_encryption_secret
🏗 Project Structure
women_safety_platform/
│
├── client/
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── utils/
│
└── README.md
🔐 Security Highlights

Hashed password storage

JWT-protected routes

AES encryption for location data

Environment-based secret management
