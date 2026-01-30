import mongoose from "mongoose";

const mediumSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

export default mongoose.model("Medium", mediumSchema);
