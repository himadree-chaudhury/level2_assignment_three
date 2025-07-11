import { Router } from "express";
import { createBorrow, getAllBorrows } from "./borrows.controller";

const borrowsRoute = Router();

// *Routes
borrowsRoute.post("/api/borrow", createBorrow);
borrowsRoute.get("/api/borrow", getAllBorrows);

export default borrowsRoute;
