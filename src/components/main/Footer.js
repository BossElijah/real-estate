import React from 'react';

const Footer = () => {
  return (
    <>
    <div>
      <h2>Tilmeld dig vores nyhedsbrev</h2>
      <input type="text" name="email" id="email" placeholder="Din email-adresse her..." />
      <a href="/nyhedsbrev" className="btn">Tilmeld</a>
    </div>
    <p>Real Estate &copy; 2019 All Rights Reserved</p>
    </>
  );
};

export default Footer;
