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
        const hiddenClass = !showRemove && 'hidden';
        // TODO: implement remove

        return (
            <a className="Bookmark" href={url} onClick={this.remove}>
                <h3 className="title">{name || url}</h3>
                <p className={hiddenClass}>{'Click to remove'}</p>
            </a>
        );
    }
}

export default Bookmark;