# Library Management System API

A RESTful API for managing a library system built with Express, TypeScript, and MongoDB.

## Setup Instructions

1. **Prerequisites**
   - Node.js (v16 or higher)
   - MongoDB (local or cloud instance)
   - TypeScript

2. **Installation**
   ```bash
   git clone <repository-url>
   cd library-management-api
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root directory:
   ```
   MONGODB_URI=mongodb://localhost:27017/library
   PORT=3000
   ```

4. **Run the Application**
   ```bash
   npm run build
   npm start
   ```

5. **Development Mode**
   ```bash
   npm run dev
   ```

## API Endpoints

### Books
- **POST /api/books** - Create a new book
- **GET /api/books** - Get all books (supports filtering by genre, sorting, and limiting)
- **GET /api/books/:bookId** - Get a book by ID
- **PUT /api/books/:bookId** - Update a book
- **DELETE /api/books/:bookId** - Delete a book

### Borrow
- **POST /api/borrow** - Borrow a book
- **GET /api/borrow** - Get borrowed books summary

## Features
- Schema validation using Mongoose
- Business logic for book availability
- MongoDB aggregation pipeline for borrowed books summary
- Mongoose instance method for availability checking
- Mongoose middleware for updating timestamps and book availability
- Comprehensive error handling
- TypeScript for type safety

## Error Handling
All endpoints return errors in the following format:
```json
{
  "success": false,
  "message": "Error message",
  "error": {}
}
```

## Dependencies
- express
- mongoose
- typescript
- dotenv
- ts-node-dev (for development)