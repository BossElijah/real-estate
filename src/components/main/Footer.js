import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const emailInputRef = useRef(null);

  const onClick = () => {
    emailInputRef.current.value = '';
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer">
      <div className="newsletter">
        <h2 className="footer__title">Tilmeld dig vores nyhedsbrev</h2>
        <form id="form">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Din email-adresse her..."
            ref={emailInputRef}
          />
          <Link to="/nyhedsbrev" target="_blank" className="btn footer__btn" onClick={onClick}>
            <b>Tilmeld</b>
          </Link>
        </form>
      </div>
      <p className="title__bottom">
        Real Estate &copy; 2019 All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
