import React, { Component } from 'react';
import './search-panel.css';


export default class SearchPannel extends Component {
    state = {
        term: ''
    }
    onSearchChange =(e)=>{
        const term =e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };
    render() {
        const searchText = 'Type here to search';       
        return <input type='text'
            className='btn btn-outline-secondary'
            placeholder={searchText} 
            value={this.state.term}
            onChange={this.onSearchChange} />;
    }
}