// @flow
import React from 'react';
import InputStyles from './styles';

const Input = ({ label, id, ...rest }) => (
	<InputStyles>
		{label && <label htmlFor={id}>{label}</label>}
		<input {...rest} />
	</InputStyles>
);

export default Input;
