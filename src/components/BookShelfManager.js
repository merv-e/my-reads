import React, { useState, useEffect } from "react";

const BookShelfManager = ({ updateBook, shelf, title, book, id, getBook }) => {
  
  //which shelf the book is on
  const [whichShelf, setWhichShelf] = useState(shelf);

  useEffect(() => {
    updateBook(book, whichShelf);
    getBook(id, whichShelf);
  }, [whichShelf]);

  const handleSelection = (e) => {
    setWhichShelf(e.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select
        value={whichShelf}
        id={id}
        name={title}
        onChange={handleSelection}
      >
        <option value="moveTo" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>   
        <option value="wantToRead">Want to Read</option>         
        <option value="read">Read</option>         
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookShelfManager;
