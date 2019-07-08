// @flow
import React from 'react';
import ButtonStyles from './styles.js'

const Button = ({ children, ...rest }) => (
    <ButtonStyles {...rest}>{children}</ButtonStyles>
);

export default Button;
