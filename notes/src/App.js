import React, { Component } from 'react';
import './App.css';
import SideNav from './components/SideNav/SideNav';
import MainContain from './components/MainContainer/MainContain';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNav />
        <MainContain />
      </div>
    );
  }
}

export default App;
