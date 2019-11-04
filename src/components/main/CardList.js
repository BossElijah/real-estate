import React from 'react';


const cardList = ({ title, cards }) => {
  return (
    <div className="card-container">
      <h2 className="card-title">{title}</h2>
      <div className="card-list">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img className="agents"
              src={process.env.PUBLIC_URL + '/img/' + card.img.src}
              alt={card.img.alt}
            />
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
    </div>
  );
};

export default cardList;
