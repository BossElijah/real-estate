import React from 'react';

const Paragraph = ({ text1, text2, slogan, title }) => {
  return (
    <div className="two-column-layout">
      <div className="inner">
        <div className="inner-left">
          <h2 className="inner-left__title">{title}</h2>
          <h2 className="inner-left__title">{slogan}</h2>
        </div>
        <div className="inner-right">
          <p className="inner-right__text">{text1}</p>
          <p className="inner-right__text">{text2}</p>
        </div>
      </div>
    </div>
  );
};

export default Paragraph;
