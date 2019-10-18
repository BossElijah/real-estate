import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const CardList = ({ cards }) => {
  return (
    <div className="imageLinks">
      {cards.map((card, index) => (
        <Fragment key={index}>
          <Link to={card.linkSrc} className="imageLink">
            <h3 className="imageLink__title">{card.title}</h3>
            <div className="imageLink__img-wrapper">
              <img
                className="imageLink__image"
                src={process.env.PUBLIC_URL + '/img/' + card.img.src}
                alt={card.img.alt}
              />
            </div>
          </Link>
        </Fragment>
      ))}
    </div>
  );
};

export default CardList;
