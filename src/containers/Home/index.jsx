// @flow
import React, { Component, Fragment } from 'react';
import { remote } from 'electron';
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import ProjectItem from './components/ProjectItem';
import { getProjects } from '../../db';

type State = {
	projects: Array<string>
};

type Props = {
	history: any
};

@connect((state) => ({
	isLoading: state.HomeReducer.isLoading,
}), {})
class Home extends Component<Props, State> {
	state = {
		projects: []
	};

	componentDidMount() {
		this.setState({
			projects: getProjects()
		});
	}

	handleAddNewButtonClick = () => {
		const { history: { push } } = this.props;
		push(`/addnewproject`);
	};

	handleExit = () => {
		remote.getCurrentWindow().close();
	};

	handleGoToSettings = () => {
		const { history: { push } } = this.props;
		push(`/settings`);
	};

	renderHeader = () => (
		<Fragment>
			<span>Choose a project</span>
			<Button
				className="add-new-project"
				type="button"
				style={{ float: 'right' }}
				onClick={this.handleAddNewButtonClick}
			>
				Add New Project
			</Button>
		</Fragment>
	);

	renderFooter = () => (
		<div className="home-footer">
			<button type="button" className="icon icon-exit" onClick={this.handleExit} />
			<button type="button" className="icon icon-settings" onClick={this.handleGoToSettings} />
		</div>
	);

	render() {
		const { projects } = this.state;
		return (
			<Layout header={this.renderHeader()} footer={this.renderFooter()}>
				{projects.length === 0 && <span className="empty-state">You haven't any projects yet!</span>}
				{projects.map((project: any) => (
					<ProjectItem key={`project-${project.name}-${project.color}`} name={project.name} color={project.color} />
				))}
			</Layout>
		);
	}
}
export default Home;
