import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import BookSetList from "./pages/BookSetList";
import CreateBookSet from "./pages/CreateBookSet";
import EditBookSet from "./pages/EditBookSet";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>School Book Inventory</h1>

      <nav style={{ marginBottom: "20px", display: "flex", justifyContent: "space-evenly" }}>
        <Link to="/" style={{textDecoration: "none",  padding: "5px 10px"}}>
          Book Sets
        </Link>

        <Link
          to="/create"
          style={{
            padding: "5px 10px",
            background: "#4CAF50",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
          }}
        >
          Create Book Set
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<BookSetList />} />
        <Route path="/create" element={<CreateBookSet />} />
        <Route path="/edit/:id" element={<EditBookSet />} />
      </Routes>
    </div>
  );
}

export default App;
