import React, {Component} from 'react';
import bookmarkStorage from './bookmark-storage';
import localStorage from './local-storage';
import Bookmark from './bookmark-class';

import './AddDialog.css';

class AddDialog extends Component {
    static propTypes = {
        onHiddenChange: React.PropTypes.func
    };

    static defaultProps = {
        onHiddenChange: () => {}
    };

    LOCAL_STORAGE_KEY = 'hidden';

    constructor(props) {
        super(props);

        this.state = {
            hidden: localStorage.get(this.LOCAL_STORAGE_KEY) || false,
            url: ''
        };
    }

    componentWillMount() {
        this.props.onHiddenChange(this.state.hidden);
    }

    toggleHidden = () => {
        const newHidden = !this.state.hidden;
        this.setState({hidden: newHidden});
        localStorage.set(this.LOCAL_STORAGE_KEY, newHidden);
        this.props.onHiddenChange(newHidden);
    };

    add = () => {
        bookmarkStorage.add(new Bookmark(this.state.url));
        this.setState({url: ''});
    };

    setUrl = (event) => {
        this.setState({url: event.target.value});
    };

    onKeyPress = (event) => event.key === 'Enter' && this.add();

    render() {
        const {hidden, url} = this.state;
        const hiddenClass = hidden && 'hidden';
        return (
            <div className='AddDialog'>
                <button onClick={this.toggleHidden}>{hidden ? 'Add' : 'Hide'}</button>
                <input className={hiddenClass} onChange={this.setUrl} onKeyPress={this.onKeyPress} value={url} type="text"/>
                <button className={hiddenClass} onClick={this.add}>Add</button>
            </div>
        );
    }
}

export default AddDialog;