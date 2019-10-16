import React from 'react';

const Hero = ({ title, img: { src, alt }  }) => {
  console.log('/public/img/' + src);
  return (
    <div>
      <h1>{title}</h1>
      <img src={process.env.PUBLIC_URL + '/img/' + src} alt={alt} style={{ width: '100%' }} />
    </div>
  );
};

export default Hero;
