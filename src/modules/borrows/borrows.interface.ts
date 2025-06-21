import mongoose, { Document } from "mongoose";

export interface IBorrow extends Document{
    book: mongoose.Types.ObjectId,
    quantity: number,
    dueDate: Date,
}