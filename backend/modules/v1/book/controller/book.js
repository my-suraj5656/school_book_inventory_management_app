import Board from "../../../../database/model/board.js";
import Medium from "../../../../database/model/medium.js";
import Class from "../../../../database/model/class.js";
import AcademicYear from "../../../../database/model/academic.js";
import Book from "../../../../database/model/book.js";

const bookController = {
  // getallboards
  async getBoards(req, res) {
    try {
      const boards = await Board.find();
      return res.status(200).json(boards);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  // getallmedium
  async getMediums(req, res) {
    try {
      const mediums = await Medium.find();
      return res.status(200).json(mediums);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  // getallclasses
  async getClasses(req, res) {
    try {
      const classes = await Class.find();
      return res.status(200).json(classes);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  // getallacademicyear
  async getYears(req, res) {
    try {
      const years = await AcademicYear.find();
      return res.status(200).json(years);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  // GET ALL BOOKS
  async getBooks(req, res) {
    try {
      const books = await Book.find();
      return res.status(200).json(books);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};

export default bookController;
