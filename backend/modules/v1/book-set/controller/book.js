import "../../../../database/model/academic.js";
import "../../../../database/model/board.js";
import Bookset from "../../../../database/model/bookset.js";
import "../../../../database/model/class.js";
import "../../../../database/model/book.js";
import "../../../../database/model/medium.js";

const booksetController = {
  // create book
  async createBook(req, res) {
    try {
      const { books, ...rest } = req.body;

      const formattedBooks = (books || []).map((b) => ({
        bookId: b.book_id,
        quantity: b.quantity,
      }));

      const set = await Bookset.create({
        ...rest,
        books: formattedBooks,
      });

      return res.status(201).json(set);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  // get single bookset
  async getBookSetById(req, res) {
    try {
      const set = await Bookset.findById(req.params.id).populate(
        "boardId mediumId classId yearId books.bookId",
      );

      if (!set) {
        return res.status(404).json({ message: "Book set not found" });
      }

      return res.status(200).json(set);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  // getbooksets
  async getBookSets(req, res) {
    try {
      // console.log(true, req.query.board_id);

      const filters = {};
      if (req.query.board_id) filters.boardId = req.query.board_id;
      if (req.query.medium_id) filters.mediumId = req.query.medium_id;
      if (req.query.class_id) filters.classId = req.query.class_id;
      if (req.query.year_id) filters.yearId = req.query.year_id;

      const sets = await Bookset.find(filters).populate(
        "boardId mediumId classId yearId books.bookId",
      );

      return res.status(200).json(sets);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  // update book
  async updateBookSet(req, res) {
    try {
      const { boardId, mediumId, classId, yearId, setName, books } = req.body;

      const formattedBooks = books.map((b) => ({
        bookId: b.book_id,
        quantity: b.quantity,
      }));

      const set = await Bookset.findByIdAndUpdate(
        req.params.id,
        {
          boardId,
          mediumId,
          classId,
          yearId,
          setName,
          books: formattedBooks,
        },
        { new: true },
      );

      return res.status(200).json(set);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  // delete book
  async deleteBookSet(req, res) {
    try {
      await Bookset.findByIdAndDelete(req.params.id);
      return res.status(200).json({ message: "Book set deleted" });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};

export default booksetController;
