import React from 'react';
import { Link } from 'react-router-dom';

const CardList = ({ cards }) => {
  return (
    <div className="cards">
      {cards.map(card => (
        <>
          <Link to={card.linkSrc} className="card">
            <h3 className="card__title">{card.title}</h3>
            <div className="img-wrapper">
              <img className="card__image" src={process.env.PUBLIC_URL + '/img/' + card.img.src} alt={card.img.alt} />
            </div>
          </Link>
        </>
      ))}
    </div>
  );
};

export default CardList;
