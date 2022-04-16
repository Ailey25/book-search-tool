import util from './util';

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
