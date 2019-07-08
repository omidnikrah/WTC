// @flow
import React, { Component, Fragment } from 'react';
import ProjectItem from '../Home/components/ProjectItem';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import { StartStopButton } from './styles';
import { getProject } from '../../db';

class Project extends Component {
	state = {
		projectData: {}
	};

	componentDidMount() {
		const { match: { params: { projectName } } } = this.props;
		this.setState({
			projectData: getProject(projectName)
		});
	}

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
					{projectName}
				</span>
				<Button
					className="project-advanced"
					type="button"
					style={{ float: 'right' }}
					onClick={this.handleProjectAdvanced}
				>
					Advanced...
				</Button>
			</Fragment>
		);
	};

	handleBack = () => {
		history.back();
	};

	handleProjectAdvanced = () => {
		const { history: { push }, match: { params: { projectName } } } = this.props;
		push(`/project/${projectName}/advanced`);
	};

	renderFooter = () => (
		<div className="project-footer">
			<span className="key-value">
				<span className="key">Total Time:</span>
				<span className="value">23:42</span>
			</span>
			<span className="key-value">
				<span className="key">Total Income:</span>
				<span className="value">2,400,000</span>
			</span>
		</div>
	);

	render() {
		const { projectData } = this.state;
		return (
			<Layout headerColor={projectData.color} header={this.renderHeader()} footer={this.renderFooter()}>
				<StartStopButton isStarted={false} />
				<span className="working-time">00:00</span>
			</Layout>
		);
	}
}

export default Project;
