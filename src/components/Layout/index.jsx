// @flow
import React from 'react';
import LayoutWrapper from './styles';

const Layout = ({ header, headerColor, footer, children }: any) => (
	<LayoutWrapper>
		<header
			style={headerColor ? { backgroundColor: headerColor } : {}}
			className={`header${headerColor ? ' no-border' : ''}`}
		>
			{header}
		</header>
		<div className="content">{children}</div>
		{footer && <footer className="footer">{footer}</footer>}
	</LayoutWrapper>
);

export default Layout;
