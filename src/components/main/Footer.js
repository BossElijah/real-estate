import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
       <div className="newsletter">
          <h2 className="footer__title">Tilmeld dig vores nyhedsbrev</h2>
          <input type="text" name="email" id="email" placeholder="Din email-adresse her..." />
          <Link to="/nyhedsbrev" className="btn footer__btn"><b>Tilmeld</b></Link>
        </div>
      <p className="title__bottom">Real Estate &copy; 2019 All Rights Reserved</p>
    </div>
  );
};

export default Footer;
