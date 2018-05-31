import React, { Component } from 'react';
import './index.css';

class NoteView extends Component {
  constructor() {
    super();
    this.state = {
      notesArray: [
        {
          _id: 'qazwsx',
          title: 'First Note',
          body: 'First lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.',
          createdAt: 1527789175361
        },
        {
          _id: 'plmokn',
          title: 'Second Note',
          body: 'Second, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.',
          createdAt: 1527789175370
        },
        {
          _id: 'ijnuhb',
          title: 'Third Note',
          body: 'Third tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.',
          createdAt: 1527789175375
        },
        {
          _id: 'edcrfv',
          title: 'Forth Note',
          body: 'Third tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.',
          createdAt: 1527789175390
        },
      ]
    }
  }
  render() {
    return (
      <div className='noteView-container'>
      <div className='noteView-selector'>
      <a className='edit-click'>edit</a>
      <a>delete</a>
      </div>
        <div className='content-header noteView-header'>
          <h2>{this.state.notesArray[0].title}:</h2>
        </div>
        <div className='noteView-content'>
          <p>{this.state.notesArray[0].body}</p>       
        </div>
      </div>
    )
  }
};

export default NoteView;
