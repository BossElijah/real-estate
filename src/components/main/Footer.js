import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
       <div className="newsletter">
          <h2 className="footer__title">Tilmeld dig vores nyhedsbrev</h2>
          <input type="text" name="email" id="email" placeholder="Din email-adresse her..." />
          <a href="/nyhedsbrev" className="btn"><b>Tilmeld</b></a>
        </div>
      <p className="title__bottom">Real Estate &copy; 2019 All Rights Reserved</p>
    </div>
  );
};

export default Footer;
