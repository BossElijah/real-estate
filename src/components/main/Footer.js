import React, { useRef } from 'react';

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
        <form action="/nyhedsbrev" onSubmit={onClick} target="_blank" id="form">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Din email-adresse her..."
            ref={emailInputRef}
            required
          />
          <input type="submit" value="Tilmeld" className="btn footer__btn" />
        </form>
      </div>
      <p className="footer__title-bottom">
        Real Estate &copy; 2019 All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
