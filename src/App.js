import React, { useEffect, useState } from 'react';
import BookSearch from './BookSearch/BookSearch';
import BookList from './BookList/BookList';
import services from './services';
import utils from './util';
import enums from './enum';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [sortType, setSortType] = useState(enums.sortType.NONE);
  const [sortedBooks, setSortedBooks] = useState([]);


  useEffect(() => {
  });

  const onSortChange = (e) => {
    const type = e.currentTarget.value;
    setSortType(type);
    let sortedBooks = utils.sortBooks(type, books);
    setSortedBooks(sortedBooks);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const bookTitle = e.target?.bookTitle?.value;

    try {
      services.getBooks(bookTitle)
          .then(async res => {
            const formattedBooks = await services.formatBooks(res.docs)
            setBooks(formattedBooks);
            setSortedBooks(formattedBooks);
          })
    } catch (err) {
      console.log('err', err);
    }
  }

  return (
    <div data-testid="app" className="App">
      <BookSearch onSubmit={onSubmit} />
      <div className="sort-container">
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" name="sort" value={sortType} onChange={onSortChange}>
          <option value={enums.sortType.NONE}>None</option>
          <option value={enums.sortType.ALPHABETICAL}>Book Title</option>
          <option value={enums.sortType.MOST_RECENT_PUBLISHED_DATE}>Most Recent Published Date</option>
        </select>
      </div>
      <BookList books={sortedBooks} />
    </div>
  );
}

export default App;
