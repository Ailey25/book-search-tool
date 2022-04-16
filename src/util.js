import enums from './enum';

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
    sortBooks 
}

export default utils;