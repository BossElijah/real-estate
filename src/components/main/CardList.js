import React from 'react';


const cardList = ({ title, cards }) => {
  return (
    <>
      <h2>{title}</h2>
      <div className="cardList">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.img.src} alt={card.img.alt} />
            <h3>{card.name}</h3>
            <p>{card.age}</p>
            <p>{card.area}</p>
            <i className="fas fa-phone"></i>
            <p>{card.phone}</p>
            <i className="fas fa-envelope"></i>
            <p>{card.email}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default cardList;
