import mongoose from "mongoose";

const academicYearSchema = new mongoose.Schema(
  {
    yearLabel: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("AcademicYear", academicYearSchema);
