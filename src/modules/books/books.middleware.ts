import { IBookMethod } from "./books.interface";
import { bookSchema } from "./books.model";

bookSchema.pre("save", function (this: IBookMethod, next) {
  this.available = this.copies > 0;
  next();
});
