import express from "express";
import cors from "cors";
import { Application } from "express";
import booksRoute from "./modules/books/books.route";
import borrowsRoute from "./modules/borrows/borrows.routes";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use(booksRoute);
app.use(borrowsRoute);

app.get("/", (req, res) => {
  res.send("Welcome to the library management app!");
});

export default app;
