import React, { Fragment } from 'react';

const Contact = ({ img: {src, alt}, title, name, subtitle, contacts }) => {
  return (
    <>
      <div>
        <img src={process.env.PUBLIC_URL + '/img/' + src} alt={alt} />
      </div>
      <div>
        <h2>{title}</h2>
        <h3>{name}</h3>
        <h3>
          <b>{subtitle}</b>
        </h3>
        {contacts.map((contact, index) => (
          <Fragment key={index}>
            <i className={contact.icon}></i>
            <p>{contact.text}</p>
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default Contact;

