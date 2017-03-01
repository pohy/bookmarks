import React, {Component} from 'react';
import bookmarkStorage from './bookmark-storage';
import Bookmark from './bookmark-class';

import './AddDialog.css';

class AddDialog extends Component {
    static propTypes = {
        hidden: React.PropTypes.bool.isRequired,
        onCancel: React.PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            url: ''
        };
    }

    add = () => {
        bookmarkStorage.add(new Bookmark(this.state.url));
        this.setState({url: ''});
        this.props.onCancel();
    };

    setUrl = (event) => {
        this.setState({url: event.target.value});
    };

    onKeyPress = (event) => event.key === 'Enter' && this.add();

    render() {
        const {url} = this.state;
        const {hidden, onCancel} = this.props;
        const addDialogClasses = `AddDialog ${hidden ? 'AddDialog-hidden' : 'AddDialog-shown'}`;
        return (
            <div className={addDialogClasses}>
                <button onClick={onCancel}>&times;</button>
                <input onChange={this.setUrl} onKeyPress={this.onKeyPress} value={url} type="text" autoFocus/>
                <button onClick={this.add}>+</button>
            </div>
        );
    }
}

export default AddDialog;