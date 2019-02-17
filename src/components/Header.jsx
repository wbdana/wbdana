import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className={"header"}>
      <div className="header__header-row">
        <div className="row">
          <div className="col-1-of-2">
            <div className="header__animated">
              <div className="header__text">
                William Dana
              </div>
            </div>
          </div>

          <div className="col-1-of-2">
            Column Two
          </div>
        </div>
      </div>


      <Navbar />
    </header>
  );
};

export default Header;
