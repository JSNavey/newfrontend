import React, { Component } from 'react';
import './index.css';

class CreateNote extends Component {
    render() {
        return (
            <div>
                <div className='content-header'>
                    <h2>Create New Note:</h2>
                </div>
                <div className='form'>
                <input className='title-input'
                    type='text'
                    name='title'
                    placeholder='Note Title'
                />
                <input className='content-input'
                    type='textarea'
                    name='text'
                    placeholder='Note Content'
                />
                <button className='btn form-btn'>Save</button>
                </div>
            </div>
        );
    }
}

export default CreateNote;