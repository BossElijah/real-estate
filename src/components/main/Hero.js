import React from 'react';

const Hero = ({ title, img: { src, alt }  }) => {
  return (
    <div className="hero">
      <img src={process.env.PUBLIC_URL + '/img/' + src} alt={alt} className="hero__image"/>
      <h1 className="hero__title">{title}</h1>
    </div>
  );
};

export default Hero;
