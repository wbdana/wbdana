import React from 'react';
import Navbar from './Navbar';

const Footer = () => {
  // return (
  //     <div className="footer">
  //         <div className="row u-grid-max-width mobile">
  //
  //           <div className="col-1-of-4">
  //             <a href="https://github.com/wbdana" target="_blank" rel="noopener noreferrer" className="footer__text-link">
  //               GitHub
  //             </a>
  //           </div>
  //
  //           <div className="col-1-of-4">
  //             <a href="https://linkedin.com/in/wbdana" target="_blank" rel="noopener noreferrer" className="footer__text-link">
  //               LinkedIn
  //             </a>
  //           </div>
  //
  //           <div className="col-1-of-4">
  //             <a href="https://medium.com/@wbdana" target="_blank" rel="noopener noreferrer" className="footer__text-link">
  //               Blog
  //             </a>
  //           </div>
  //
  //           <div className="col-1-of-4">
  //             <a href="https://twitter.com/_wbdana" target="_blank" rel="noopener noreferrer" className="footer__text-link">
  //               Twitter
  //             </a>
  //           </div>
  //
  //         </div>
  //     </div>
  // );

  return (
    <div className="footer">
      <Navbar />
      <div className="footer__text">&copy; 2019 William Dana</div>
    </div>
  );
};

export default Footer;
