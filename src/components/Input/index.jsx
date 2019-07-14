// @flow
import React from 'react';
import InputStyles from './styles';

const Input = ({ label, id, errorMessage, ...rest }: any) => (
	<InputStyles>
		{label && <label htmlFor={id}>{label}</label>}
		<input {...rest} />
		{errorMessage && (
			<span className="error-message">
				{errorMessage}
			</span>
		)}
	</InputStyles>
);

export default Input;
