import express from "express";
import cors from "cors";
import { Application } from "express";
import booksRoute from "./modules/books/books.route";
import borrowsRoute from "./modules/borrows/borrows.routes";
import {
  errorHandler,
  notFound,
} from "./modules/errorHandler/errorHandler.controller";

const app: Application = express();

// *Middleware
app.use(express.json());
app.use(cors());

// *Routes
app.get("/", (req, res) => {
  res.send("Welcome to the library management app!");
});

app.use(booksRoute);
app.use(borrowsRoute);

// *Error handling middleware
app.use(notFound);
app.use(errorHandler);

export default app;
