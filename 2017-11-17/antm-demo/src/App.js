import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd-mobile';
import Navs from './components/navs';
import Tab from './components/tab';
import Demo from './components/list';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navs />
        <Tab />
        <Demo />
      </div>
    );
  }
}

export default App;
