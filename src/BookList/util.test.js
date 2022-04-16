import util from './util';
import enums from '../enum';

test('Get author string when there is no author', () => {
    const authors = [];
    const result = util.getAuthors(authors);
    expect(result).toBe("No authors found");
});

test('Get author string when there is 1 author', () => {
    const authors = ['author1'];
    const result = util.getAuthors(authors);
    expect(result).toBe("author1");
});

test('Get author string when there are 2 authors', () => {
    const authors = ['author1', 'author2'];
    const result = util.getAuthors(authors);
    expect(result).toBe("author1 and author2");
});

test('Get author string when there are 3+ authors', () => {
    const authors = ['author1', 'author2', 'author3'];
    const result = util.getAuthors(authors);
    expect(result).toBe("author1, author2, and author3");
});

test('Sort book by default', () => {
    const books = [{
        title: 'book3',
    },{
        title: 'book2',
    },{
        title: 'book1',
    }]
    const result = util.sortBooks(enums.sortType.NONE, books);
    expect(result).toEqual(books);
})

test('Sort book alphabetically', () => {
    const books = [{
        title: 'cBook',
    },{
        title: 'bBook',
    },{
        title: 'aBook',
    }]
    const result = util.sortBooks(enums.sortType.ALPHABETICAL, books);
    expect(result).toEqual([{
        title: 'aBook',
    },{
        title: 'bBook',
    },{
        title: 'cBook',
    }]);
})

test('Sort book by most recently published', () => {
    const books = [{
        mostRecentPublishYear: 1900,
    },{
        mostRecentPublishYear: 1000,
    },{
        mostRecentPublishYear: 2000,
    }]
    const result = util.sortBooks(enums.sortType.MOST_RECENT_PUBLISHED_DATE, books);
    expect(result).toEqual([{
        mostRecentPublishYear: 2000,
    },{
        mostRecentPublishYear: 1900,
    },{
        mostRecentPublishYear: 1000,
    }]);
})