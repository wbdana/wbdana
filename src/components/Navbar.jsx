import React from 'react';

const Navbar = () => {
  return (
    <div className="row">
    <div className="navbar">

        <div className="col-1-of-4">
          <div className="navbar__item navbar__item-1">
            <span className="navbar__item navbar__item-text">
              GitHub
            </span>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="navbar__item navbar__item-2">
            <span className="navbar__item navbar__item-text">
              LinkedIn
            </span>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="navbar__item navbar__item-3">
            <span className="navbar__item navbar__item-text">
              Blog
            </span>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="navbar__item navbar__item-4">
            <span className="navbar__item navbar__item-text">
              Twitter
            </span>
          </div>
        </div>
    </div>
    </div>
  );
};

export default Navbar;
