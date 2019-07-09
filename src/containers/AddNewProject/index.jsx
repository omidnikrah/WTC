// @flow
import React, { Component, Fragment } from 'react';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { addNewProject } from '../../db';

class AddNewProject extends Component {
	state = {
		projectName: '',
		projectColor: '#ff5526',
		errors: {
			projectName: '',
		},
	};

	renderHeader = () => (
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

	handleBack = () => {
		const { history } = this.props;
		history.goBack();
	};

	handleAddProject = () => {
		const { history } = this.props;
		const { projectName, projectColor } = this.state;
		if (projectName.length > 0) {
			addNewProject(projectName, projectColor);
			history.goBack();
		} else {
			this.setState({
				errors: {
					projectName: "Please write your project name",
				}
			});
		}
	};

	handleInputChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
		this.setState({
			errors: {
				projectName: "",
			}
		});
	};

	render() {
		const { projectName, projectColor, errors } = this.state;
		return (
			<Layout header={this.renderHeader()}>
				<form>
					<Input
						label="Project Name:"
						type="text"
						name="projectName"
						value={projectName}
						errorMessage={errors.projectName}
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
