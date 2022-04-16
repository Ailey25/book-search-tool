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

const utils = {
    getAuthors
}

export default utils;
