import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className={"header"}>

      {/*<div className="header__header-row">*/}
        {/*<div className="row">*/}
          {/*<div className="col-1-of-2 resp">*/}

      <div className="mw9 center ph3-ns">
        <div className="cf ph2-ns">
          <div className="fl w-100 w-50-ns pa2">
            <div className="header__animated">
              {/*<div className="header__text">*/}
                William Dana
              {/*</div>*/}
            </div>
          </div>

          <div className="fl w-100 w-50-ns pa2">
            <a
              href="https://github.com/wbdana"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://avatars1.githubusercontent.com/u/26241113?s=460&v=4"
                alt="Will and Indy"
                className="image"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
