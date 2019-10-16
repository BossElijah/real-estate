import React from 'react';
import { Link } from 'react-router-dom';

const CardList = ({ cards }) => {
  return cards.map(card => (
    <>
      <Link to={card.linkSrc}>
        <h3>{card.title}</h3>
        <img src={process.env.PUBLIC_URL + '/img/' + card.img.src} alt={card.img.alt} style={{ width: '25vw' }} />
      </Link>
    </>
  ));
};

export default CardList;
