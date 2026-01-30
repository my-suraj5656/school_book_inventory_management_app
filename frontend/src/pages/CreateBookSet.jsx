import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  fetchBoards,
  fetchMediums,
  fetchClasses,
  fetchYears,
  fetchBooks,
  createBookSet
} from "../services/api";
import BookSelectTable from "../components/BookSelectTable";

export default function CreateBookSet() {
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
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    fetchBoards().then(res => setBoards(res.data || []));
    fetchMediums().then(res => setMediums(res.data || []));
    fetchClasses().then(res => setClasses(res.data || []));
    fetchYears().then(res => setYears(res.data || []));
    fetchBooks().then(res => setBooks(res.data || []));
  }, []);

  const handleCreate = async () => {
    await createBookSet({
      boardId: form.board_id,
      mediumId: form.medium_id,
      classId: form.class_id,
      yearId: form.year_id,
      setName: form.set_name,
      books: selectedBooks
    });

    alert("Book Set Created!");
    navigate("/");
  };

  return (
    <div>
      <h2>Create Book Set</h2>

      {/* Step 1: Dropdowns */}
      <select value={form.board_id} onChange={e => setForm({ ...form, board_id: e.target.value })}>
        <option>Select Board</option>
        {boards.map(b => <option key={b._id} value={b._id}>{b.name}</option>)}
      </select>

      <select value={form.medium_id} onChange={e => setForm({ ...form, medium_id: e.target.value })}>
        <option>Select Medium</option>
        {mediums.map(m => <option key={m._id} value={m._id}>{m.name}</option>)}
      </select>

      <select value={form.class_id} onChange={e => setForm({ ...form, class_id: e.target.value })}>
        <option>Select Class</option>
        {classes.map(c => <option key={c._id} value={c._id}>{c.className}</option>)}
      </select>

      <select value={form.year_id} onChange={e => setForm({ ...form, year_id: e.target.value })}>
        <option>Select Year</option>
        {years.map(y => <option key={y._id} value={y._id}>{y.yearLabel}</option>)}
      </select>

      {/* Step 2: Set Name */}
      <input
        placeholder="Set Name"
        value={form.set_name}
        onChange={e => setForm({ ...form, set_name: e.target.value })}
      />

      {/* Step 3: Select Books */}
      <BookSelectTable
        books={books}
        selectedBooks={selectedBooks}
        setSelectedBooks={setSelectedBooks}
      />

      {/* Preview Button */}
      <button onClick={() => setShowPreview(true)}>Preview</button>

      {/* Step 4: Preview Screen */}
      {showPreview && (
        <div style={{
          border: "1px solid #ccc",
          padding: "15px",
          marginTop: "20px",
          background: "#f9f9f9"
        }}>
          <h3>Preview Book Set</h3>

          <p><b>Board:</b> {boards.find(b => b._id === form.board_id)?.name}</p>
          <p><b>Medium:</b> {mediums.find(m => m._id === form.medium_id)?.name}</p>
          <p><b>Class:</b> {classes.find(c => c._id === form.class_id)?.className}</p>
          <p><b>Year:</b> {years.find(y => y._id === form.year_id)?.yearLabel}</p>
          <p><b>Set Name:</b> {form.set_name}</p>

          <h4>Books</h4>
          <ul>
            {selectedBooks.map(b => {
              const book = books.find(book => book._id === b.book_id);
              return (
                <li key={b.book_id}>
                  {book?.bookName} — Qty: {b.quantity}
                </li>
              );
            })}
          </ul>

          <p><b>Total Unique Books:</b> {selectedBooks.length}</p>
          <p><b>Total Quantity:</b> {selectedBooks.reduce((sum, b) => sum + b.quantity, 0)}</p>

          <button onClick={handleCreate}>Confirm & Create</button>
          <button onClick={() => setShowPreview(false)} style={{ marginLeft: 10 }}>
            Back
          </button>
        </div>
      )}
    </div>
  );
}
