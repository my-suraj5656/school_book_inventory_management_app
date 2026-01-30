export default function BookSelectTable({ books, selectedBooks, setSelectedBooks }) {

  const handleCheck = (bookId, checked) => {
    if (checked) {
      setSelectedBooks([...selectedBooks, { book_id: bookId, quantity: 1 }]);
    } else {
      setSelectedBooks(selectedBooks.filter(b => b.book_id !== bookId));
    }
  };

  const handleQtyChange = (bookId, qty) => {
    setSelectedBooks(
      selectedBooks.map(b =>
        b.book_id === bookId ? { ...b, quantity: Number(qty) } : b
      )
    );
  };

  const isSelected = (id) => selectedBooks.some(b => b.book_id === id);

  return (
    <div>
      <h3>Select Books</h3>

      {books.map(book => {
        const selected = isSelected(book._id);
        const qty = selectedBooks.find(b => b.book_id === book._id)?.quantity || 1;

        return (
          <div key={book._id}>
            <input
              type="checkbox"
              checked={selected}
              onChange={e => handleCheck(book._id, e.target.checked)}
            />
            {book.bookName}

            {selected && (
              <input
                type="number"
                min="1"
                value={qty}
                onChange={e => handleQtyChange(book._id, e.target.value)}
                style={{ width: 50, marginLeft: 10 }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
