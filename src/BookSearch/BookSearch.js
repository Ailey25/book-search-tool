const BookSearch = ({ onSubmit }) => {
    return(
        <form onSubmit={onSubmit}>
            <label htmlFor="bookTitle">Book Name:</label>
                <input
                    type="text"
                    id="bookTitle"
                    name="bookTitle"
                    />
            <button type="submit">Get list</button>
        </form>
    );
}

export default BookSearch;
