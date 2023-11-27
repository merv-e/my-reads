import "./App.css";
import { useEffect, useState } from "react";
import * as BooksAPI from "./services/BooksAPI";
import { Route, Routes } from "react-router-dom";
import SearchBooks from "./components/Search/SearchBooks";
import Library from "./components/Library/Library";

const App = () => {
  // books comes with the API call (fetchBooks) will be stored here for the main page
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await BooksAPI.getAll();
    setBooks(res);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
    fetchBooks();
  };

  const getBook = (bookId, shelf) => {
    const res = BooksAPI.get(bookId);
    updateBook(res, shelf);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Library books={books} updateBook={updateBook} getBook={getBook} />
          }
        />
        <Route
          path="/search"
          element={
            <SearchBooks
              books={books}
              updateBook={updateBook}
              getBook={getBook}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
