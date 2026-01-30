import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import AcademicYear from "../model/academic.js";
import Board from "../model/board.js";
import Class from "../model/class.js";
import Medium from "../model/medium.js";
import Book from "../model/book.js";

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");

    // Clear old data
    await AcademicYear.deleteMany();
    await Board.deleteMany();
    await Class.deleteMany();
    await Medium.deleteMany();
    await Book.deleteMany();

    // Academic Years
    await AcademicYear.insertMany([
      {
        yearLabel: "2021-22",
        startDate: new Date("2021-04-01"),
        endDate: new Date("2022-03-31"),
      },
      {
        yearLabel: "2022-23",
        startDate: new Date("2022-04-01"),
        endDate: new Date("2023-03-31"),
      },
      {
        yearLabel: "2023-24",
        startDate: new Date("2023-04-01"),
        endDate: new Date("2024-03-31"),
      },
      {
        yearLabel: "2024-25",
        startDate: new Date("2024-04-01"),
        endDate: new Date("2025-03-31"),
      },
      {
        yearLabel: "2025-26",
        startDate: new Date("2025-04-01"),
        endDate: new Date("2026-03-31"),
      },
    ]);

    //  Boards
    await Board.insertMany([
      { name: "CBSE" },
      { name: "ICSE" },
      { name: "State Board" },
      { name: "IB" },
      { name: "IGCSE" },
    ]);

    //  Classes
    await Class.insertMany([
      { className: "Grade 1" },
      { className: "Grade 2" },
      { className: "Grade 3" },
      { className: "Grade 4" },
      { className: "Grade 5" },
    ]);

    //  Mediums
    await Medium.insertMany([
      { name: "English" },
      { name: "Hindi" },
      { name: "Gujarati" },
      { name: "Marathi" },
      { name: "Tamil" },
    ]);

    // book
    await Book.insertMany([
      {
        bookName: "Mathematics Grade 3",
        subject: "Mathematics",
        publisher: "NCERT",
      },
      {
        bookName: "English Reader 3",
        subject: "English",
        publisher: "Oxford",
      },
      {
        bookName: "EVS Basics",
        subject: "Environmental Studies",
        publisher: "Orient BlackSwan",
      },
      {
        bookName: "Hindi Pathmala",
        subject: "Hindi",
        publisher: "Saraswati",
      },
      {
        bookName: "Computer Fundamentals",
        subject: "Computer",
        publisher: "TechBooks",
      },
    ]);

    console.log("Master data seeded successfully 🚀");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedData();
