import React from 'react';

const Paragraph = ({ text1, text2, slogan, title }) => {
  return (
    <div className="container" >
    <div className="bolig__title">
        <h2>{title}</h2>
        <h2>{slogan}</h2>
      </div>
      <div className="bolig__text">
        <p>{text1}</p>
        <br/>
        <p>{text2}</p>
      </div>
    </div>
  );
};

export default Paragraph;
