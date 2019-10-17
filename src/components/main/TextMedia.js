import React from 'react';

const TextMedia = ({ title, slogan, text }) => {
  return (
    <div className="newsletter">
    <div>
      <h2 className="newsletter__title">{title}</h2>
      <h2>{slogan}</h2>
    </div>
    <div>
      <p className="newsletter__text">{text}</p>
    </div>
    </div>
  );
};

export default TextMedia;
