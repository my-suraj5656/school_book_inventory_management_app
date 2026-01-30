import mongoose from "mongoose";

const bookItemSchema = new mongoose.Schema({
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
  quantity: Number,
});

const bookSetSchema = new mongoose.Schema(
  {
    setName: String,
    boardId: { type: mongoose.Schema.Types.ObjectId, ref: "Board" },
    mediumId: { type: mongoose.Schema.Types.ObjectId, ref: "Medium" },
    classId: { type: mongoose.Schema.Types.ObjectId, ref: "Class" },
    yearId: { type: mongoose.Schema.Types.ObjectId, ref: "AcademicYear" },
    books: [bookItemSchema],
  },
  { timestamps: true },
);

export default mongoose.model("BookSet", bookSetSchema);
