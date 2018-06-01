import React, { Component } from 'react';
import './index.css';

class DeleteNote extends Component {
    render() {
        let toggle = this.props.toggle;
        return (
            <div className={ toggle ? 'modal-wrapper': 'hidden' }>
                <div className='modal-header'>
                    <h4>Are you sure you want to delete this?</h4>
                </div>
                <div>
                    <button 
                        className='btn modal-btn delete-btn'
                        onClick={this.props.showModal}
                        >
                        Delete
                        </button>
                    <button 
                        className='btn modal-btn'
                        onClick={this.props.showModal}
                        >No
                        </button>
                </div>
            </div>
        );
    }
}

export default DeleteNote;