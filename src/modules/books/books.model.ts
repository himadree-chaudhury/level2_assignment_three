import { Model, model, Schema } from "mongoose";
import { IBook, IBookMethod } from "./books.interface";

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
      trim: true,
    },
    description: { type: String, trim: true },
    copies: {
      type: Number,
      required: [true, "Copies are required"],
      min: [0, "Copies must be a positive number"],
      validate: {
        validator: Number.isInteger,
        message: "Copies must be an integer value",
      },
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// *Instance method to update availability

bookSchema.methods.updateAvailability = async function (
  this: IBookMethod
): Promise<void> {
  this.available = this.copies > 0;
  await this.save();
};


const Book: Model<IBook> = model<IBook>("Book", bookSchema);

export { Book, bookSchema };
