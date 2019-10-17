import React from 'react';
import data from '../../data/data.json';
import Hero from './Hero';
import CardList from './CardList';
import TextMedia from './TextMedia';
import Contact from './Contact';
import Paragraph from './Paragraph';

const Deck = ({ type, ...props }) => {
  const deckMap = {
    hero: Hero,
    cardList: CardList,
    textMedia: TextMedia,
    contact: Contact,
    paragraph: Paragraph
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
