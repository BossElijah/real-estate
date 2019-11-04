import React, { Fragment } from 'react';


const ContactForm = ({ title, textFields }) => {
  return (
    <form action="/" className="contactForm">
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        {textFields.map((textField, index) => (
          <Fragment key={index}>
            <input type="text" placeholder={textField} id={textField} required />
          </Fragment>
        ))}
      </div>
      <input type="submit" value="Send" className="contactForm__btn"></input>
    </form>
  );
};

export default ContactForm;
