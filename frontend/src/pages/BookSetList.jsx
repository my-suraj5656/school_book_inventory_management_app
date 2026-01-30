import React, { useEffect, useState } from "react";
import { getBookSets, deleteBookSet } from "../services/api";
import { Link } from "react-router-dom";

export default function BookSetList() {
  const [bookSets, setBookSets] = useState([]);
  console.log(bookSets);
  

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getBookSets().then(res => setBookSets(res.data));
  };

  const handleDelete = async (id) => {
    await deleteBookSet(id);
    loadData(); 
  };

  return (
    <div>
      <h2>All Book Sets</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
        {bookSets.map(set => (
          <div
            key={set._id}
            style={{
              border: "1px solid #ccc",
              borderRadius: 10,
              padding: 15,
              width: 280,
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
            }}
          >
            <h3>{set.setName}</h3>
            <p><b>Board:</b> {set.boardId?.name}</p>
            <p><b>Class:</b> {set.classId?.className}</p>
            <p><b>Year:</b> {set.yearId?.yearLabel}</p>

            <div>
              <b>Books:</b>
              <ul>
                {set.books?.map(b => (
                  <li key={b.bookId?._id}>
                    {b.bookId?.bookName} (Qty: {b.quantity})
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Link to={`/edit/${set._id}`}>
                <button>Edit</button>
              </Link>

              <button
                style={{ background: "red", color: "white" }}
                onClick={() => handleDelete(set._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
