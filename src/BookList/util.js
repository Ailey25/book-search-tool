import enums from '../enum';

const getAuthors = (authors) => {
    if (authors.length === 0) {
        return "No authors found";
    }
    if (authors.length === 1) {
        return authors[0];
    }
    if (authors.length === 2) {
        return `${authors[0]} and ${authors[1]}`;
    }
    const lastAuthor = authors.pop();
    const authorString = authors.join(', ') + ', and ' + lastAuthor;
    return authorString;
}

const sortBooks = (sortType, books = []) => {
    switch(sortType) {
        case enums.sortType.NONE:
            return books;
        case enums.sortType.ALPHABETICAL:
            return [...books].sort((a, b) => a.title.localeCompare(b.title));
        case enums.sortType.MOST_RECENT_PUBLISHED_DATE:
            return [...books].sort((a, b) => b.mostRecentPublishYear - a.mostRecentPublishYear);
        default:
            return books;
    }
}

const utils = {
    getAuthors,
    sortBooks
}

export default utils;
