import Book from "../books/books.model";
import { borrowSchema } from "./borrows.model";

borrowSchema.pre("save", async function (next) {
  const book = await Book.findById(this.book);
  if (!book) {
    return next(new Error("Book not found"));
  }
  if (!book.checkAvailability(this.quantity)) {
    console.log("Hello");
    return next(new Error("Not enough copies available"));
  }
  book.copies -= this.quantity;
  if (book.copies === 0) {
    book.available = false;
  }
  await book.save();
  next();
});
