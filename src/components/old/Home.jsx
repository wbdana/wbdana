import React from 'react';
import Header from '../Header';
import Projects from '../Projects';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Projects />
      {/*<Footer />*/}
    </div>
  )
};

export default Home;