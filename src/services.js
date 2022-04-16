const formatBooks = (docs = []) => {
    return Promise.all(docs.map(async doc => {
        let coverImageUrlS = "";
        let coverImageUrlM = "";

        if (doc.cover_i) {
            coverImageUrlS = await getCoverImageByID(doc.cover_i, "S");
            coverImageUrlM = await getCoverImageByID(doc.cover_i, "M");
        }

        const mostRecentPublishYear = doc.publish_year
            .reduce((year1, year2) => (Math.max(year1, year2)), -Infinity);
        return {
            key: doc.key,
            title: doc.title,
            coverImageUrlS,
            coverImageUrlM,
            authors: doc.author_name,
            mostRecentPublishYear,
        }
    }));
}

const generateRequestBookTitle = (bookTitle = "") => {
    return bookTitle.split(/\s+/).join("+");
}

const getBooks = (bookTitle = "") => {
    const formattedTitle = generateRequestBookTitle(bookTitle);
    const url = `http://openlibrary.org/search.json?q=${formattedTitle}`;
    return fetch(url).then(data => data.json());
}

const getCoverImageByID = (coverID = "", size = "S") => {
    const url = `https://covers.openlibrary.org/b/id/${coverID}-${size}.jpg`;
    return fetch(url)
        .then(data => data.blob())
        .then(imageBlob => URL.createObjectURL(imageBlob));
}

const services = {
    formatBooks,
    getBooks,
    getCoverImageByID
}

export default services;
