import React, { Component } from 'react';
import './index.css';

class SideNav extends Component {
  render() {
    return (
      <div className='side-nav'>
        <h1>Lambda<br />Notes</h1>
        <div>
        <button className='btn nav-btn'>View Your Notes</button>
        <button className='btn nav-btn bottom-btn'>+Create New Note</button>
        </div>
      </div>
    )
  }
};

export default SideNav;
