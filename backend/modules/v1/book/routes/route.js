import express from "express";
import bookController from "../controller/book.js";


const router = express.Router();

router.get("/board", bookController.getBoards);
router.get("/medium", bookController.getMediums);
router.get("/class", bookController.getClasses);
router.get("/academic", bookController.getYears);
router.get("/book", bookController.getBooks);

export default router;
