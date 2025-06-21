/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { Borrow } from "./borrows.model";
import { Book } from "../books/books.model";

// *Create a borrow
const createBorrow = async (req: Request, res: Response) => {
  const payload = req.body;

  try {
    const book = await Book.findById(payload.book);

    // *Validate book data
    if (!book) {
      res.status(404).send({
        success: false,
        message: "Book not found",
      });
      return;
    }
    if (book?.copies < payload.quantity) {
      {
        res.status(400).send({
          success: false,
          message: "Not enough copies available",
        });
      }
      return;
    }

    const borrowData = new Borrow(payload);

    if (borrowData) {
      await borrowData.save();
      // *Update book copies and availability
      if (book) {
        book.copies -= payload.quantity;
        await book.updateAvailability();
      }

      res.status(201).send({
        success: true,
        message: "Book borrowed successfully",
        data: borrowData,
      });
    }
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: error.message || "Failed to borrow book",
      error: {
        name: error.name,
        message: error.message,
      },
    });
  }
};

// *Get all borrows with summary
const getAllBorrows = async (req: Request, res: Response) => {
  try {
    const summary = await Borrow.aggregate([
      {
        $group: {
          _id: "$book",
          totalQuantity: { $sum: "$quantity" },
        },
      },
      {
        $lookup: {
          from: "books",
          localField: "_id",
          foreignField: "_id",
          as: "book",
        },
      },
      {
        $unwind: "$book",
      },
      {
        $project: {
          book: {
            title: "$book.title",
            isbn: "$book.isbn",
          },
          _id: 0,
          totalQuantity: 1,
        },
      },
    ]);

    if (summary) {
      res.status(200).send({
        success: true,
        message: "Borrows retrieved successfully",
        data: summary,
      });
    } else {
      res.status(404).send({
        success: false,
        message: "No borrows found",
      });
    }
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: error.message || "Failed to retrieve borrows",
      error: {
        name: error.name,
        message: error.message,
      },
    });
  }
};

export { createBorrow, getAllBorrows };
