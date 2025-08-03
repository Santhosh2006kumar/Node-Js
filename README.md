📚 Online Book Review API
This is a Node.js and Express.js-based backend application that serves as a RESTful API for an online book review system. It allows users to browse books, register, login, and perform review operations.

🚀 Features
Public (Unauthenticated) Endpoints
GET / — Get a list of all books.

GET /isbn/:isbn — Get book details by ISBN.

GET /author/:author — Search books by author.

GET /title/:title — Search books by title.

GET /review/:isbn — Get reviews for a book.

POST /register — Register a new user.

Authenticated User Endpoints
POST /customer/login — Login with username and password (returns JWT).

PUT /customer/auth/review/:isbn — Add or modify a review (JWT required).

PUT /customer/auth/delreview/:isbn — Delete a review (JWT required).

Async Routes (under /async)
POST /async/all — Get all books using async/await.

POST /async/:isbn — Get book by ISBN using a promise.

POST /async/auth/:author — Get books by author using async/await.

POST /async/title/:title — Get books by title using async/await.

🛠️ Tech Stack
Node.js

Express.js

JWT (JSON Web Tokens) for authentication

express-session for session handling

📦 Installation
bash
Copy
Edit
git clone <your-repo-url>
cd bookshop
npm install
▶️ Running the Server
bash
Copy
Edit
npm start
The server will start at http://localhost:5000.

🧪 Testing
Use Postman to test the API endpoints. Make sure to:

Register a user.

Login to obtain a token.

Use the token to perform review operations.


📚 Sample Data
Includes 10 classic books with metadata (author, title, and optional reviews).

🛡️ Authentication
JWT tokens are issued upon successful login and are required for all protected routes (/customer/auth/*).

✅ Project Requirements Met
 Book search by ISBN, author, and title.

 Book review management.

 User registration and login with JWT.

 Support for concurrent user access via async/await and promises.

 RESTful API structure.

 Session management.

📜 License
MIT
