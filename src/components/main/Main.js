import React from 'react';
import data from '../../data/data.json';
import Hero from './Hero';
import CardList from './CardList';

const Deck = ({ type, ...props }) => {
  const deckMap = {
    hero: Hero,
    cardList: CardList
  };

  return React.createElement(
    deckMap[type],
    props,
    null
  );
};

const Main = () => {
  const page = data.pages.find(page => page.url === window.location.pathname);

  return page.decks.map((deck, index) => <Deck key={index} type={deck.type} {...deck} />);
};

export default Main;
