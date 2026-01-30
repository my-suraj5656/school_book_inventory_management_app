import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import BookSet from "../model/bookset.js";

const seedBookSets = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");

    await BookSet.deleteMany();

    await BookSet.insertMany([
      {
        setName: "Grade 1 CBSE English 2021-22",
        boardId: "697c2029b3b8ff1ed37bd98a",
        mediumId: "697c202ab3b8ff1ed37bd996",
        classId: "697c2029b3b8ff1ed37bd990",
        yearId: "697c2029b3b8ff1ed37bd984",
        books: [
          { bookId: "697c202ab3b8ff1ed37bd99c", quantity: 30 },
          { bookId: "697c202ab3b8ff1ed37bd99d", quantity: 30 }
        ]
      },
      {
        setName: "Grade 2 ICSE Hindi 2022-23",
        boardId: "697c2029b3b8ff1ed37bd98b",
        mediumId: "697c202ab3b8ff1ed37bd997",
        classId: "697c2029b3b8ff1ed37bd991",
        yearId: "697c2029b3b8ff1ed37bd985",
        books: [
          { bookId: "697c202ab3b8ff1ed37bd99e", quantity: 25 },
          { bookId: "697c202ab3b8ff1ed37bd99c", quantity: 25 }
        ]
      },
      {
        setName: "Grade 3 State Board Gujarati 2023-24",
        boardId: "697c2029b3b8ff1ed37bd98c",
        mediumId: "697c202ab3b8ff1ed37bd998",
        classId: "697c2029b3b8ff1ed37bd992",
        yearId: "697c2029b3b8ff1ed37bd986",
        books: [
          { bookId: "697c202ab3b8ff1ed37bd99c", quantity: 40 },
          { bookId: "697c202ab3b8ff1ed37bd99e", quantity: 40 }
        ]
      },
      {
        setName: "Grade 4 IB Marathi 2023-24",
        boardId: "697c2029b3b8ff1ed37bd98d",
        mediumId: "697c202ab3b8ff1ed37bd999",
        classId: "697c2029b3b8ff1ed37bd993",
        yearId: "697c2029b3b8ff1ed37bd986",
        books: [
          { bookId: "697c202ab3b8ff1ed37bd99d", quantity: 35 },
          { bookId: "697c202ab3b8ff1ed37bd99e", quantity: 35 }
        ]
      },
    ]);

    console.log("BookSet data seeded successfully 📚");
    await mongoose.connection.close();
    process.exit();
  } catch (error) {
    console.error("Seeding Error:", error);
    process.exit(1);
  }
};

seedBookSets();
