import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="row">

        <div className="col-1-of-4">
          <div className="navbar__item">
            <span className="navbar__item-text">
              Github
            </span>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="navbar__item">
            <span className="navbar__item-text">
              LinkedIn
            </span>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="navbar__item">
            <span className="navbar__item-text">
              Blog
            </span>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="navbar__item">
            <span className="navbar__item-text">
              Twitter
            </span>
          </div>
        </div>
    </div>
    </div>
  );
};

export default Navbar;
