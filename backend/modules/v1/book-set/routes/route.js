import express from "express";
import booksetController from "../controller/book.js";
const router = express.Router();

router.post("/create", booksetController.createBook);
router.get("/", booksetController.getBookSets);
router.get("/:id", booksetController.getBookSetById); 
router.put("/:id", booksetController.updateBookSet);
router.delete("/:id", booksetController.deleteBookSet);

export default router;
