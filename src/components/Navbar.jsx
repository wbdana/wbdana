import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">

      <div className="mw9 center ph3-ns">
        <div className="cf ph2-ns">
          <div className="fl w-100 w-25-ns pa4 navbar__item">

            {/*<div className="navbar__item navbar__item-2">*/}
              <a href="https://github.com/wbdana" target="_blank" rel="noopener noreferrer" className="navbar__item navbar__item-text">
                GitHub
              </a>
            {/*</div>*/}

          </div>




          <div className="fl w-100 w-25-ns pa4 navbar__item">

            {/*<div className="navbar__item navbar__item-3">*/}
              <a href="https://medium.com/@wbdana" target="_blank" rel="noopener noreferrer" className="navbar__item navbar__item-text">
                Blog
              </a>
            {/*</div>*/}

          </div>
          <div className="fl w-100 w-25-ns pa4 navbar__item">

            {/*<div className="navbar__item navbar__item-4">*/}
              <a href="https://twitter.com/_wbdana" target="_blank" rel="noopener noreferrer" className="navbar__item navbar__item-text">
                Twitter
              </a>
            {/*</div>*/}

          </div>

          <div className="fl w-100 w-25-ns pa4">

            {/*<div className="navbar__item navbar__item-1">*/}
            <a href="https://linkedin.com/in/wbdana" target="_blank" rel="noopener noreferrer" className="navbar__item navbar__item-text">
              LinkedIn
            </a>
            {/*</div>*/}

          </div>

          <div className="fl w-100 w-25-ns pa4 navbar__item">
            <a href="https://drive.google.com/file/d/1HAG4EIefGKaCxyWqwkMsdHKLrGwBSnsn/view" target="_blank" rel="noopener noreferrer" className="navbar__item navbar__item-text">
                Resume
            </a>
          </div>


        </div>
      </div>

    </div>
  );
};

export default Navbar;
