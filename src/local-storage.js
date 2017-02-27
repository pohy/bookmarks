export default {
    get, set, remove, clear
};

function get(key) {
    const value = localStorage.getItem(key);
    if (!value) {
        return null;
    }
    return JSON.parse(value);
}

function set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function remove(key) {
    localStorage.removeItem(key);
}

function clear() {
    localStorage.clear();
}
