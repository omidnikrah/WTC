// @flow
import React from 'react';
import LayoutWrapper from './styles';

const Layout = ({ header, footer, children }: any) => (
    <LayoutWrapper>
        <header className="header">{header}</header>
        <div className="content">{children}</div>
        <footer className="footer">{footer}</footer>
    </LayoutWrapper>
);

export default Layout;
