import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
// import Home from './components/old/Home';
import './css/style.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="*" component={Home} />
      </Router>
    );
  }
}

export default App;
