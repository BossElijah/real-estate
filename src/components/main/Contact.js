import React, { Fragment } from 'react';

const Contact = ({ img: {src, alt}, title, name, subtitle, contacts }) => {
  return (
    <div className="contact">
      <div className="contact__image-wrapper">
        <img className="contact__image" src={process.env.PUBLIC_URL + '/img/' + src} alt={alt} />
      </div>
      <div className="contact__info">
        <h2 className="contact__title">{title}</h2>
        <h3 className="contact__name">{name}</h3>
        {contacts.map((contact, index) => (
          <div className="icons">
            <i className={contact.icon + ' contact__icon'}></i>
            <p className="icon__text">{contact.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;

