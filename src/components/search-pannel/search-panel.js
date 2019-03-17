import React from 'react';
import './search-panel.css';

const SearchPannel = () => {
    const searchText = 'Type here to search';
    const searchStyle= {
        fonySize: '25px'
    }
    return <input placeholder={searchText} style={searchStyle} />;
}

export default SearchPannel;