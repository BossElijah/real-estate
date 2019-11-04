import React from 'react';
import data from '../../data/data.json';
import Hero from './Hero';
import ImageLink from './ImageLink';
import Newsletter from './Newsletter';
import Contact from './Contact';
import Paragraph from './Paragraph';
import Agents from './Agents';
import Form from './Form';
import ContactForm from './ContactForm';

const Deck = ({ type, ...props }) => {
  const deckMap = {
    hero: Hero,
    imageLink: ImageLink,
    newsletter: Newsletter,
    contact: Contact,
    paragraph: Paragraph,
    agents: Agents,
    form: Form,
    contactForm: ContactForm
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
