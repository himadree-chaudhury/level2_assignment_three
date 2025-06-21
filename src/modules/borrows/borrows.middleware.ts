import { Book } from "../books/books.model";
import { borrowSchema } from "./borrows.model";

borrowSchema.pre("save", async function (next) {
  const book = await Book.findById(this.book);
  if (!book) {
    return next(new Error("Book not found"));
  }
  if (this.quantity > book.copies) {
    return next(new Error("Not enough copies available"));
  }
  next();
});
