import { Router } from "express";
import { createBook } from "./books.controller";

const booksRoute = Router();

booksRoute.post("/api/books", createBook);

export default booksRoute;