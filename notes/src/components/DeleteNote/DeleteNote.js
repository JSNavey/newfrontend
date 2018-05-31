import React, { Component } from 'react';
import './index.css';

class DeleteNote extends Component {
    render() {
        return (
            <div className='modal-wrapper hidden'>
                <div className='modal-header'>
                    <h4>Are you sure you want to delete this?</h4>
                </div>
                <div>
                    <button className='btn modal-btn delete-btn'>Delete</button>
                    <button className='btn modal-btn'>No</button>
                </div>
            </div>
        );
    }
}

export default DeleteNote;