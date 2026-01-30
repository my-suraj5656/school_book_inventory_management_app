📚 School Book Inventory Management System

A full-stack web application for managing school books and book sets.
Built using the MERN Stack and deployed with modern cloud platforms.

🔗 Frontend: Deployed on Vercel
🔗 Backend API: Deployed on Render
🔗 Database: MongoDB Atlas

🚀 Features

📖 Manage school books

📦 Create and manage book sets

🔍 Fetch books based on board, class, medium, and academic year

🗂 Modular backend architecture

🌐 RESTful APIs

🔗 Frontend connected to live backend

☁ Full deployment (Frontend + Backend)

🛠 Tech Stack
Layer	Technology
Frontend	React (Vite), Axios
Backend	Node.js, Express
Database	MongoDB, Mongoose
Deployment	Vercel (Frontend), Render (Backend)

📁 Project Structure
backend
 ├── database
 ├── modules
 │    ├── book
 │    └── book-set
 ├── middleware
 └── index.js

frontend
 ├── src
 └── public

⚙️ Backend Setup
cd backend
npm install


Create .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string


Start server:

npm start

💻 Frontend Setup
cd frontend
npm install
npm run dev

🌍 Deployment
Service	Platform
Frontend	Vercel
Backend	Render
Database	MongoDB Atlas

📡 API Endpoints
📘 Book Routes
Method	Endpoint	Description
GET	/book/board	Get all boards
GET	/book/medium	Get all mediums
GET	/book/class	Get all classes
GET	/book/academic	Get academic years
GET	/book/book	Get books list

📦 Book Set Routes
Method	Endpoint	Description
POST	/book-set/create	Create new book set
GET	/book-set/	Get all book sets
GET	/book-set/:id	Get book set by ID
PUT	/book-set/:id	Update book set
DELETE	/book-set/:id	Delete book set
🔐 CORS Policy

Backend allows requests from:

Production frontend (Vercel)

Localhost for development

👨‍💻 Author

Suraj Prasad

