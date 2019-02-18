import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="row">
          <div className="col-1-of-4 resp">
            <div className="navbar__item navbar__item-2">
              <a href="https://github.com/wbdana" target="_blank" rel="noopener noreferrer" className="navbar__item navbar__item-text">
                GitHub
              </a>
            </div>
          </div>

          <div className="col-1-of-4 resp">
            <div className="navbar__item navbar__item-1">
              <a href="https://linkedin.com/in/wbdana" target="_blank" rel="noopener noreferrer" className="navbar__item navbar__item-text">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="col-1-of-4 resp">
            <div className="navbar__item navbar__item-3">
              <a href="https://medium.com/@wbdana" target="_blank" rel="noopener noreferrer" className="navbar__item navbar__item-text">
                Blog
              </a>
            </div>
          </div>

          <div className="col-1-of-4 resp">
            <div className="navbar__item navbar__item-4">
              <a href="https://twitter.com/_wbdana" target="_blank" rel="noopener noreferrer" className="navbar__item navbar__item-text">
                Twitter
              </a>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
