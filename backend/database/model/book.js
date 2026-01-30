import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    bookName: { type: String, required: true, trim: true },
    subject: { type: String, required: true, trim: true },
    publisher: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

export default mongoose.model("Book", bookSchema);
