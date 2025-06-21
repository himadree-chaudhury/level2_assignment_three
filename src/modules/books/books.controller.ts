import { Request, Response } from "express";
import Book from "./books.model";

const createBook = async (req: Request, res: Response) => {
  const payload = req.body;
  try {
    const bookData = await new Book(payload).save();
    if (bookData) {
      res.status(201).send({
        success: true,
        message: "Book created successfully",
        data: bookData,
      });
    }
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: error.message || "Failed to create book",
        error: {
            name: error.name,
            
        },
    });
    console.log(error.name);
  }
};

export { createBook };
