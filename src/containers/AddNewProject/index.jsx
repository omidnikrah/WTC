// @flow
import React, { Component, Fragment } from 'react';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { addNewProject } from '../../db';

class AddNewProject extends Component {
	state = {
		projectName: '',
		projectColor: ''
	};

	renderHeader = () => {
		return (
			<Fragment>
				<button type="button" className="icon icon-back" onClick={this.handleBack} />
				<span
					style={{
						fontWeight: 'bold',
						fontSize: 17
					}}
				>
					Add New Project
				</span>
			</Fragment>
		);
	};

	handleBack = () => {
		history.back();
	};

	handleAddProject = () => {
		addNewProject(this.state.projectName, this.state.projectColor);
		history.back();
	};

	handleInputChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	render() {
		const { projectName, projectColor } = this.state;
		return (
			<Layout header={this.renderHeader()}>
				<form>
					<Input
						label="Project Name:"
						type="text"
						name="projectName"
						value={projectName}
						onChange={this.handleInputChange}
					/>
					<Input
						label="Project Color:"
						type="color"
						name="projectColor"
						value={projectColor}
						onChange={this.handleInputChange}
					/>
					<Button
						style={{
							padding: '10px 20px',
							marginTop: 20,
							fontWeight: 'bold'
						}}
						type="submit"
						onClick={this.handleAddProject}
					>
						Add Project
					</Button>
				</form>
			</Layout>
		);
	}
}

export default AddNewProject;
