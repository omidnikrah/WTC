// @flow
import React, { Fragment } from 'react';
import InputStyles from '../Input/styles';

const Selectbox = ({ label, id, errorMessage, options, value, ...rest }: any) => (
	<InputStyles>
		{console.warn(value)}
		{label && <label htmlFor={id}>{label}</label>}
		<select {...rest}>
			<option disabled selected>
				Select...
			</option>
			{options.map((option, index) => (
				<Fragment>
					<option key={`option--${option.value}-${index}`} value={option.value} selected={value === option.value}>
						{console.log(value, option.value)}
						{option.label}
					</option>
				</Fragment>
			))}
		</select>
		{errorMessage && <span className="error-message">{errorMessage}</span>}
	</InputStyles>
);

export default Selectbox;
