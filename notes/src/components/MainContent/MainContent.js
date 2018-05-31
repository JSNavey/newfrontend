import React, { Component } from 'react';
import './index.css';
import NoteList from '../NoteList/NoteList';
import NoteView from '../NoteView/NoteView';
import CreateNote from '../CreateNote/CreateNote';
import EditNote from '../EditNote/EditNote';

class MainContent extends Component {
  render() {
    return (
      <div className='main-content'>
          <div>
            {/* <NoteList /> */}
            {/* <NoteView /> */}
            {/* <CreateNote /> */}
            {/* <EditNote /> */}
          </div>
      </div>
    )
  }
};

export default MainContent;
