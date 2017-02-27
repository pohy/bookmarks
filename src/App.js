import React, {Component} from 'react';
import './App.css';
import bookmarkStorage from './bookmark-storage';
import Bookmark from './Bookmark';
import AddDialog from './AddDialog';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bookmarks: bookmarkStorage.getAll(),
            showRemove: false
        };
    }

    reloadBookmarks = () => {
        this.setState({bookmarks: bookmarkStorage.getAll()})
    };

    toggleShowRemove = (hidden) => {
        this.setState({showRemove: !hidden});
    };

    removeBookmark = (index) => () => {
        bookmarkStorage.remove(index);
        this.reloadBookmarks();
    };

    render() {
        const {showRemove} = this.state;

        return (
            <div className="App">
                {this.state.bookmarks.map((bookmark, i) =>
                    <Bookmark bookmark={bookmark} showRemove={showRemove} key={i} onRemove={this.removeBookmark(i)}/>)
                }
                <AddDialog onBookmarkAdd={this.reloadBookmarks} onHiddenChange={this.toggleShowRemove}/>
            </div>
        );
    }
}

export default App;
