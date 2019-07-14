// @flow
import React, { Component, Fragment } from 'react';
import Layout from '../../components/Layout';

type State = {};
type Props = {
	match: any,
	history: any
};

class Settings extends Component<Props, State> {
	renderHeader = () => {
		const { match: { params: { projectName } } } = this.props;
		return (
			<Fragment>
				<button type="button" className="icon icon-back" onClick={this.handleBack} />
				<span
					style={{
						fontWeight: 'bold',
						fontSize: 17
					}}
				>
					Settings
				</span>
			</Fragment>
		);
	};

	handleBack = () => {
		const { history } = this.props;
		history.goBack();
	};

	render() {
		return <Layout header={this.renderHeader()}>Comming Soon!</Layout>;
	}
}

export default Settings;
