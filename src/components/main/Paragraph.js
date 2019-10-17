import React from 'react';

const Paragraph = ({ text, slogan, title }) => {
  return (
    <>
    <div>
      <h2>{title}</h2>
      <h2>{slogan}</h2>
    </div>
    <div>
      <p>{text}</p>
    </div>
    </>
  );
};

export default Paragraph;
