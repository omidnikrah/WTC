// @flow
import React from 'react';
import LayoutWrapper from './styles';

const Layout = ({ header, children }: any) => (
    <LayoutWrapper>
        <header className="header">{header}</header>
        <div className="content">{children}</div>
    </LayoutWrapper>
);

export default Layout;
