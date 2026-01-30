import mongoose from "mongoose";

const classSchema = new mongoose.Schema(
  {
    className: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

export default mongoose.model("Class", classSchema);
