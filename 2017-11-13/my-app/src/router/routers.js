import React, { Component } from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class Home extends Component {
    render() {
      return (
        <ul>
            <li><Link to="/one">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
        </ul>
      );
    }
  }
  
  export default Home;
