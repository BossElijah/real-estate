import React, { Fragment } from 'react';

const Form = ({ title, textFields }) => {
	return (
		<form action="/" className="contactForm">
			<div className="contactForm__title">
				<h3>{title}</h3>
			</div>
			<div>
				{textFields.map((textField, index) => (
					<Fragment key={index}>
						<input className="contactForm__textField" type="text" placeholder={textField} id={textField} required />
					</Fragment>
				))}
			</div>
			<input type="submit" value="Send" className="contactForm__btn"></input>
		</form>
	);
};

export default Form;
