class Bookmark {
    constructor(url, name = '') {
        this.url = url;
        this.name = name;
        this.createdAt = Date.now();
    }
}

export default Bookmark;