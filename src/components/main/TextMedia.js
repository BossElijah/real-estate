import React from 'react';
import { Link } from 'react-router-dom';

const TextMedia = ({ title, slogan, text, cta: { url, ctaText } }) => {
  return (
    <>
    <div className="newsletter">
      <div>
        <h2 className="newsletter__title">{title}</h2>
      </div>
      <div>
        <p className="newsletter__text">{text}</p>
      </div>
      <Link to={url} className="btn-l">
      {ctaText}
      </Link>
    </div>
    </>
  );
};

export default TextMedia;
