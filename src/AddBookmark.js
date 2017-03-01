import React, {Component} from 'react';

import './AddBookmark.css'

class AddBookmark extends Component {
    static propTypes = {
        onClick: React.PropTypes.func.isRequired
    };

    onClick = (event) => {
        event.preventDefault();
        this.props.onClick();
    };

    render() {
        return (
            <a href="#" className="Bookmark AddBookmark" onClick={this.onClick}>
                <h3 className="title">+</h3>
            </a>
        );
    }
}

export default AddBookmark;