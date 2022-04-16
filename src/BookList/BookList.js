import util from './util';
import './BookList.css';

const BookList = ({ books = [] }) => {
    const renderBookCover = (coverImageUrlS, coverImageUrlM, title = "") => {
        if (coverImageUrlS && coverImageUrlM) {
            return (
                <div className="book-cover">
                    <picture>
                        <source media="(max-width: 575px)" srcSet={coverImageUrlS} />
                        <source media="(min-width: 576px)" srcSet={coverImageUrlM} />
                        <img src={coverImageUrlM} alt={title} />
                    </picture>
                </div>
            );
        }
        return <div className="book-cover">No cover image found</div>
    }

    const renderBookAuthors = (authors = []) => {
        const authorsString = util.getAuthors(authors);
        return (
            <div>{authorsString}</div>
        );
    }

    const renderBook = (book) => (
        <div className="grid-item" key={book.key}>
            <div>{book.title}</div>
            {renderBookCover(book.coverImageUrlS, book.coverImageUrlM, book.title)}
            {renderBookAuthors(book.authors)}
            <div>{book.mostRecentPublishYear}</div>
        </div>
    );

    if (books.length === 0) {
        return (
            <div>
                No results found
            </div>
        );
    }

    return (
        <div className="grid-container">
            {
                books.map(book => renderBook(book))
            }
        </div>
    );
}

export default BookList;
