import React, { Component } from 'react';
import './index.css';
import NoteList from '../NoteList/NoteList';
import NoteView from '../NoteView/NoteView';
import CreateNote from '../CreateNote/CreateNote';

class MainContent extends Component {
  render() {
    return (
      <div className='main-content'>
          <div>
            {/* <NoteList /> */}
            {/* <NoteView /> */}
            <CreateNote />
          </div>
      </div>
    )
  }
};

export default MainContent;
