import { model, Schema } from "mongoose";
import { IBook } from "./books.interface";

const bookSchema = new Schema<IBook>(
  {
    title: { type: String, required: [true, "Title is required"], trim: true },
    author: {
      type: String,
      required: [true, "Author is required"],
      trim: true,
    },
    genre: {
      type: String,
      required: [true, "Genre is required"],
      enum: {
        values: [
          "FICTION",
          "NON_FICTION",
          "SCIENCE",
          "HISTORY",
          "BIOGRAPHY",
          "FANTASY",
        ],
        message:
          "{VALUE} is not accepted. Valid genres are: FICTION, NON_FICTION, SCIENCE, HISTORY, BIOGRAPHY, FANTASY",
      },
    },
    isbn: {
      type: String,
      required: [true, "ISBN is required"],
      unique: [true, "ISBN must be unique"],
      immutable: true,
    },
    description: { type: String },
    copies: { type: Number, required: [true, "Copies are required"], min: 0 },
    available: {
      type: Boolean,
      required: [true, "Availability is required"],
      default: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Book = model<IBook>("Book", bookSchema);

export default Book;
