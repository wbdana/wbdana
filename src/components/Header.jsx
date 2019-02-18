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


        </div>
      </div>



      {/*<div className="mw9 center ph3-ns">*/}
        {/*<div className="cf ph2-ns">*/}
          {/*<div className="fl w-100 w-50-ns pa2">*/}
            <Navbar />
          {/*</div>*/}
        {/*</div>*/}
      {/*</div>*/}

          {/*</div>*/}
        {/*</div>*/}
      {/*</div<*/}
    </header>
  );
};

export default Header;
