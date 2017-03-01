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
            url: '',
            name: ''
        };

        document.addEventListener('keydown', this.onGlobalKey)
    }

    componentWillReceiveProps(props) {
        if (!props.hidden) {
            setTimeout(() => this.urlInput.focus(), 0);
        }
    }

    onGlobalKey = (event) => {
        if (event.key === 'Escape') {
            this.props.onCancel();
        }
    };

    add = () => {
        const {name, url} = this.state;
        bookmarkStorage.add(new Bookmark(url, name));
        this.setState({url: '', name: ''});
        this.props.onCancel();
    };

    onInput = (path) => (event) => {
        this.setState({[path]: event.target.value});
    };

    onKeyPress = (event) => event.key === 'Enter' && this.add();

    render() {
        const {url, name} = this.state;
        const {hidden, onCancel} = this.props;
        const addDialogClasses = `AddDialog ${hidden ? 'AddDialog-hidden' : 'AddDialog-shown'}`;
        return (
            <div className={addDialogClasses}>
                <button onClick={onCancel} className="AddDialog-cancel">&times;</button>
                <input
                    ref={(input) => { this.urlInput = input; }}
                    onChange={this.onInput('url')}
                    onKeyPress={this.onKeyPress}
                    value={url}
                    type="text"
                    placeholder="URL"
                    autoFocus
                />
                <input
                    onChange={this.onInput('name')}
                    onKeyPress={this.onKeyPress}
                    value={name}
                    type="text"
                    placeholder="Name"
                />
                <button onClick={this.add} className="AddDialog-add">+</button>
            </div>
        );
    }
}

export default AddDialog;