import React, {Component} from 'react';
import './App.css';
import bookmarkStorage from './bookmark-storage';
import localStorage from './local-storage';
import Bookmark from './Bookmark';
import AddDialog from './AddDialog';
import AddBookmark from './AddBookmark';

class App extends Component {
    SHOW_ADD_LOCAL_STORAGE_KEY = 'showAdd';

    constructor(props) {
        super(props);

        this.state = {
            bookmarks: bookmarkStorage.getAll(),
            showAdd: localStorage.get(this.SHOW_ADD_LOCAL_STORAGE_KEY) || false
        };

        bookmarkStorage.registerOnChangeListener(this.onBookmarksChange);
    }

    onBookmarksChange = (bookmarks) => {
        this.setState({bookmarks})
    };

    changeShowAdd(value) {
        this.setState({showAdd: value});
        localStorage.set(this.SHOW_ADD_LOCAL_STORAGE_KEY, value);
    }

    toggleShowAdd = () => {
        this.changeShowAdd(!this.state.showAdd);
    };

    showAdd = () => {
        this.changeShowAdd(true);
    };

    removeBookmark = (index) => () => {
        bookmarkStorage.remove(index);
        this.reloadBookmarks();
    };

    render() {
        const {showAdd} = this.state;

        return (
            <div className="App">
                {this.state.bookmarks.map((bookmark, i) =>
                    <Bookmark bookmark={bookmark} showRemove={showAdd} key={i} onRemove={this.removeBookmark(i)}/>)
                }
                <AddBookmark onClick={this.showAdd}/>
                <AddDialog hidden={!showAdd} onCancel={this.toggleShowAdd}/>
            </div>
        );
    }
}

export default App;
