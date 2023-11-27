import Book from "../Book";
import { PropTypes } from "prop-types";

const ShelfInfo = ({ searchResults, books, updateBook, getBook }) => {
  const updatedBooks = searchResults.map((book) => {
    books.map((b) => {
      if (book.id === b.id) {
        book.shelf = b.shelf;
      }
      return b;
    });
    return book;
  });

  return (
    <ol className="books-grid">
      {updatedBooks.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          shelf={book.shelf ? book.shelf : "none"}
          title={book.title}
          authors={book.authors}
          url={
            book.imageLinks
              ? book.imageLinks.thumbnail || book.imageLinks.smallThumbnail
              : ""
          }
          book={book}
          updateBook={updateBook}
          getBook={getBook}
        />
      ))}
    </ol>
  );
};

ShelfInfo.propTypes = {
  // books: PropTypes.array.isRequired,
  searchResults: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired,
  getBook: PropTypes.func.isRequired,
};

export default ShelfInfo;
