// @flow
import React, { Component, Fragment } from 'react';
import { remote } from 'electron';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import ProjectItem from './components/ProjectItem';
import { getProjects } from '../../db';

class Home extends Component {
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
		console.log('settings');
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
				{projects.map((project: any) => (
					<ProjectItem key={`project-${project.name}-${project.color}`} name={project.name} color={project.color} />
				))}
			</Layout>
		);
	}
}
export default Home;
