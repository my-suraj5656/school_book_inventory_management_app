import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conn from "./database/connection/conn.js";
import userRoute from "./modules/v1/user/routes/route.js";
import booksetRoute from "./modules/v1/book-set/routes/route.js";
import bookRoute from "./modules/v1/book/routes/route.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "https://school-book-inventory-management-ap-five.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

dotenv.config();

// auth-Routes
app.use("/auth", userRoute);

// book-Routes
app.use("/book", bookRoute);

// book-set-Routes
app.use("/book-set", booksetRoute);

// Listen to port
conn().then(() => {
  try {
    const port = process.env.PORT;
    app.listen(port, () => {
      console.log("Server is running on PORT", port);
    });
  } catch (error) {
    console.log("Failed to connect", error);
  }
});
