import Book from "../Book";

const Shelf = ({
  shelfNamesImmutable,
  nameOfTheShelf,
  books,
  updateBook,
  getBook,
}) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{nameOfTheShelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter((book) => book.shelf === shelfNamesImmutable)
            .map((book) => (
              <Book
                key={book.id}
                id={book.id}
                shelf={book.shelf}
                title={book.title}
                authors={book.authors}
                url={
                  book.imageLinks
                    ? book.imageLinks.thumbnail
                    : book.imageLinks.smallThumbnail
                }
                book={book}
                updateBook={updateBook}
                getBook={getBook}
              />
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
