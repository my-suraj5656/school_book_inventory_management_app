import mongoose from "mongoose";

const boardSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

export default mongoose.model("Board", boardSchema);
