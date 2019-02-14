import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <Footer />
    </div>
  )
};

export default Home;