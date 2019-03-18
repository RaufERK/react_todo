import React from 'react';
import './search-panel.css';

const SearchPannel = () => {
    const searchText = 'Type here to search';
    const searchStyle= {fontSize: '15px'}
    return <input className='btn btn-outline-secondary'
    placeholder={searchText} style={searchStyle} />;
}

export default SearchPannel;