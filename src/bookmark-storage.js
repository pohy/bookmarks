import localStorage from './local-storage';

class BookmarkStorage {
    LOCAL_STORAGE_KEY = 'bookmarks';

    constructor() {
        this.bookmarks = localStorage.get(this.LOCAL_STORAGE_KEY) || [];
    }

    add(bookmark) {
        this.bookmarks.push(bookmark);
        localStorage.set(this.bookmarksKey, this.bookmarks);
    }

    getAll() {
        return this.bookmarks;
    }

    remove(index) {
        this.bookmarks.splice(index, 1);
        localStorage.set(this.LOCAL_STORAGE_KEY, this.bookmarks);
    }
}

export default new BookmarkStorage();
