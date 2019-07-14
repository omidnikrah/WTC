// @flow
import React from 'react';
import InputStyles from './styles';

const Input = ({ label, id, errorMessage, onlyNumber, ...rest }: any) => (
	<InputStyles>
		{label && <label htmlFor={id}>{label}</label>}
		<input
			{...rest}
			onKeyPress={(e: any) => {
				if (onlyNumber) {
					const char = String.fromCharCode(e.which);
					if (!/([0-9]|[۰-۹])/.test(char)) {
						e.preventDefault();
					}
				}
			}}
		/>
		{errorMessage && <span className="error-message">{errorMessage}</span>}
	</InputStyles>
);

export default Input;
