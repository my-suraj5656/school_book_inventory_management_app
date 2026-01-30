import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getBookSetById,
  updateBookSet,
  fetchBoards,
  fetchMediums,
  fetchClasses,
  fetchYears,
  fetchBooks
} from "../services/api";
import BookSelectTable from "../components/BookSelectTable";

export default function EditBookSet() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [boards, setBoards] = useState([]);
  const [mediums, setMediums] = useState([]);
  const [classes, setClasses] = useState([]);
  const [years, setYears] = useState([]);
  const [books, setBooks] = useState([]);

  const [form, setForm] = useState({
    board_id: "",
    medium_id: "",
    class_id: "",
    year_id: "",
    set_name: ""
  });

  const [selectedBooks, setSelectedBooks] = useState([]);

  useEffect(() => {
    // Load dropdown data
    fetchBoards().then(res => setBoards(res.data || []));
    fetchMediums().then(res => setMediums(res.data || []));
    fetchClasses().then(res => setClasses(res.data || []));
    fetchYears().then(res => setYears(res.data || []));
    fetchBooks().then(res => setBooks(res.data || []));

    // Load bookset data
    getBookSetById(id).then(res => {
      const data = res.data;

      setForm({
        board_id: data.boardId?._id || "",
        medium_id: data.mediumId?._id || "",
        class_id: data.classId?._id || "",
        year_id: data.yearId?._id || "",
        set_name: data.setName || ""
      });

      // SAFE book mapping
      const mappedBooks = (data.books || [])
        .filter(b => b.bookId)   // avoid crash
        .map(b => ({
          book_id: b.bookId._id,
          quantity: b.quantity
        }));

      setSelectedBooks(mappedBooks);
    });
  }, [id]);

  const handleUpdate = async () => {
    await updateBookSet(id, {
      boardId: form.board_id,
      mediumId: form.medium_id,
      classId: form.class_id,
      yearId: form.year_id,
      setName: form.set_name,
      books: selectedBooks
    });

    alert("Book Set Updated!");
    navigate("/");
  };

  return (
    <div>
      <h2>Edit Book Set</h2>

      <select
        value={form.board_id || ""}
        onChange={e => setForm({ ...form, board_id: e.target.value })}
      >
        <option>Select Board</option>
        {boards.map(b => (
          <option key={b._id} value={b._id}>{b.name}</option>
        ))}
      </select>

      <select
        value={form.medium_id || ""}
        onChange={e => setForm({ ...form, medium_id: e.target.value })}
      >
        <option>Select Medium</option>
        {mediums.map(m => (
          <option key={m._id} value={m._id}>{m.name}</option>
        ))}
      </select>

      <select
        value={form.class_id || ""}
        onChange={e => setForm({ ...form, class_id: e.target.value })}
      >
        <option>Select Class</option>
        {classes.map(c => (
          <option key={c._id} value={c._id}>{c.className}</option>
        ))}
      </select>

      <select
        value={form.year_id || ""}
        onChange={e => setForm({ ...form, year_id: e.target.value })}
      >
        <option>Select Year</option>
        {years.map(y => (
          <option key={y._id} value={y._id}>{y.yearLabel}</option>
        ))}
      </select>

      <input
        value={form.set_name || ""}
        placeholder="Set Name"
        onChange={e => setForm({ ...form, set_name: e.target.value })}
      />

      <BookSelectTable
        books={books || []}
        selectedBooks={selectedBooks || []}
        setSelectedBooks={setSelectedBooks}
      />

      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}
