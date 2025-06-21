import { Router } from "express";
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook,
} from "./books.controller";

const booksRoute = Router();

booksRoute.post("/api/books", createBook);
booksRoute.get("/api/books", getAllBooks);
booksRoute.get("/api/books/:bookId", getBookById);
booksRoute.put("/api/books/:bookId", updateBook);
booksRoute.delete("/api/books/:bookId", deleteBook);

export default booksRoute;
