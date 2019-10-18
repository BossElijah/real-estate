import React, { Fragment } from 'react';

const Contact = ({ img: {src, alt}, title, name, subtitle, contacts }) => {
  return (
    <div className="contact">
      <img className="contact__image" src={process.env.PUBLIC_URL + '/img/' + src} alt={alt} />
      <div className="contact__info">
        <h2 className="contact__title">{title}</h2>
        <h3 className="contact__name">{name}</h3>
        {contacts.map((contact, index) => (
          <Fragment key={index}>
            <i className={contact.icon}></i>
            <p>{contact.text}</p>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Contact;

