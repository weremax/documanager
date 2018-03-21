import React, { Component } from 'react';
import './styles.css';

class Search extends Component {
    render() {
        return (
            <div className="searchBox">
                Search <input type="text" />
            </div>
        );
    }
}

export default Search;