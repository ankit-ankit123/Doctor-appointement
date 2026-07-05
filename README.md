# Doctor Appointment System

A modern and user-friendly doctor appointment booking platform built with React, Vite, Tailwind CSS, Express, and MongoDB.

This project allows patients to sign up, log in, and book appointments with doctors through a clean and responsive interface.

## ✨ Project Highlights
- Secure user authentication
- Patient registration and login
- Appointment booking system
- Dashboard for managing appointments
- Responsive UI for desktop and mobile
- Swagger-based API documentation
- MongoDB-backed database design

## 🧑‍💻 Developed By
- Ankit
- Ayushi
- Abhishek

## 🛠️ Tech Stack
### Frontend
- React
- Vite
- Tailwind CSS
- JavaScript

### Backend
- Express.js
- Node.js
- MongoDB
- Mongoose
- JWT Authentication

### API Documentation
- Swagger UI
- Swagger JSDoc

## 📁 Project Structure
```bash
src/                # Frontend React application
server/             # Backend Express server
public/             # Static assets
DATABASE_DESIGN.md  # Database design documentation
```

## 🚀 Features
- User signup and login
- Appointment booking by department and time
- View all booked appointments
- Profile-based patient experience
- REST API endpoints for auth and appointments

## 📚 Documentation
- Database design: [DATABASE_DESIGN.md](DATABASE_DESIGN.md)
- Swagger docs: http://localhost:5000/api/docs

## ⚙️ Installation
### 1. Clone the repository
```bash
git clone <repository-url>
cd Doctor appointement
```

### 2. Install frontend dependencies
```bash
npm install
```

### 3. Install backend dependencies
```bash
cd server
npm install
```

### 4. Run the project
#### Start frontend
```bash
npm run dev
```

#### Start backend
```bash
cd server
npm run dev
```

## 🔐 Environment Variables
Create a `.env` file inside the server folder with:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/doctor-appointment
JWT_SECRET=your_secret_key
```

## 🗄️ Database Design
The project uses MongoDB with two main collections:
- Users
- Appointments

For a full design overview, see [DATABASE_DESIGN.md](DATABASE_DESIGN.md).

## 📌 Notes
This project is designed to be simple, scalable, and easy to extend for future features like:
- doctor profiles
- available time slots
- appointment status tracking
- admin panel
- payments and notifications

---
Built with passion by Ankit, Ayushi, and Abhishek.
