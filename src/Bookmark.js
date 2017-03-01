import React, {Component} from 'react';

import './Bookmark.css';

class Bookmark extends Component {
    static propTypes = {
        bookmark: React.PropTypes.object.isRequired,
        showRemove: React.PropTypes.bool.isRequired,
        onRemove: React.PropTypes.func.isRequired
    };

    remove = (event) => {
        if (this.props.showRemove) {
            event.preventDefault();
            this.props.onRemove();
        }
    };

    render() {
        const {bookmark: {url, name}, showRemove} = this.props;
        const bookmarkClasses = `Bookmark ${showRemove ? 'Bookmark-remove' : ''}`;
        return (
            <a className={bookmarkClasses} href={url} onClick={this.remove}>
                <h3 className="title">
                    {name || url}&nbsp;{showRemove ? <span>&times;</span> : ''}
                </h3>
            </a>
        );
    }
}

export default Bookmark;