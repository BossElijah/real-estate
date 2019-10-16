import React from 'react';

const Hero = ({ title, img: { src, alt }  }) => {
  return (
    <div className="hero-container" style={{ background:  `center / contain no-repeat url(${process.env.PUBLIC_URL + '/img/' + src})` }} >
      <h1 className="hero-title">{title}</h1>
    </div>
  );
};

export default Hero;
