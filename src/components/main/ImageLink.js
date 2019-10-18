import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const ImageLink = ({ imageLinks }) => {
  return (
    <div className="imageLinks">
      {imageLinks.map((imageLink, index) => (
        <Fragment key={index}>
          <Link to={imageLink.linkSrc} className="imageLink">
            <h3 className="imageLink__title">{imageLink.title}</h3>
            <div className="imageLink__img-wrapper">
              <img
                className="imageLink__image"
                src={process.env.PUBLIC_URL + '/img/' + imageLink.img.src}
                alt={imageLink.img.alt}
              />
            </div>
          </Link>
        </Fragment>
      ))}
    </div>
  );
};

export default ImageLink;
