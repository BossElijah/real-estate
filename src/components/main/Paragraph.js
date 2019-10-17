import React from 'react';

const Paragraph = ({ text, slogan, title }) => {
  return (
    <div className="container" >
    <div className="bolig__title">
        <h2>{title}</h2>
        <h2>{slogan}</h2>
      </div>
      <div className="bolig__text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Paragraph;
