import util from './util';
import enums from './enum';

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