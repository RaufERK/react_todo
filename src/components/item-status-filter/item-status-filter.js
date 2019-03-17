import React, { Component } from 'react';
export default class ItemStatusFilter extends Component {
    render() {
        return (
            <div className='btn-group'>
                <button type='button' className='btn btn-info float-right'>All</button>
                <button type='button' className='btn btn-outline-secondary float-right'>Active</button>
                <button type='button' className='btn btn-outline-secondary float-right'>Done</button>
            </div>);
    }
}