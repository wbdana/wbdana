import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './css/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
