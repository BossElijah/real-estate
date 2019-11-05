import React, { Fragment } from 'react';

const Form = ({ title, textFields }) => {
	return (
		<form action="/" className="form">
			<div className="form__title">
				<h3>{title}</h3>
			</div>
			<div>
				{textFields.map((textField, index) => (
					<Fragment key={index}>
						<input className="form__textField" type="text" placeholder={textField} id={textField} required />
					</Fragment>
				))}
			</div>
			<input type="submit" value="Send" className="form__btn"></input>
		</form>
	);
};

export default Form;
