// @flow
import React, { Component, Fragment } from 'react';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import Input from "../../components/Input";
import {getProject, updateProject} from "../../db";

class Advanced extends Component {
	state = {
		income: '',
		projectData: [],
	};

	componentDidMount() {
		const { match: { params: { projectName } } } = this.props;
		this.setState({
			projectData: getProject(projectName),
			income: getProject(projectName).incomePerHours ? getProject(projectName).incomePerHours : '',
		});
	}

	handleInputChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

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
					{projectName} Advanced
				</span>
			</Fragment>
		);
	};

	handleBack = () => {
		history.back();
	};

	handleUpdate = () => {
		const { match: { params: { projectName } } } = this.props;
		const { income } = this.state;
		updateProject(projectName, {
			incomePerHours: income,
		});
		history.back();
	};

	render() {
		const { income, projectData } = this.state;
		return (
			<Layout headerColor={projectData.color} header={this.renderHeader()}>
				<form>
					<Input
						label="Income per hours:"
						type="text"
						name="income"
						value={income}
						onChange={this.handleInputChange}
					/>
					<Button
						style={{
							padding: '10px 20px',
							marginTop: 20,
							fontWeight: 'bold'
						}}
						type="submit"
						onClick={this.handleUpdate}
					>
						Update
					</Button>
				</form>
			</Layout>
		);
	}
}

export default Advanced;
