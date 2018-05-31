import React, { Component } from 'react';
import './index.css';
import NoteList from '../NoteList/NoteList';

class MainContent extends Component {
  render() {
    return (
      <div className='main-content'>
        <h2>Your Notes:</h2>
          <div>
            <NoteList />
          </div>
      </div>
    )
  }
};

export default MainContent;
