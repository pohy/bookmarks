import localStorage from './local-storage';

class BookmarkStorage {
    LOCAL_STORAGE_KEY = 'bookmarks';

    constructor() {
        this.bookmarks = localStorage.get(this.LOCAL_STORAGE_KEY) || [];
        this.onChangeListeners = [];
    }

    add(bookmark) {
        this.bookmarks.push(bookmark);
        localStorage.set(this.bookmarksKey, this.bookmarks);
        this.notifyListeners();
    }

    getAll() {
        return this.bookmarks;
    }

    remove(index) {
        this.bookmarks.splice(index, 1);
        localStorage.set(this.LOCAL_STORAGE_KEY, this.bookmarks);
        this.notifyListeners();
    }

    registerOnChangeListener(listener) {
        this.onChangeListeners.push(listener);
    }

    notifyListeners() {
        const self = this;
        self.onChangeListeners.forEach(notify);

        function notify(listener) {
            listener(self.getAll());
        }
    }
}

export default new BookmarkStorage();
