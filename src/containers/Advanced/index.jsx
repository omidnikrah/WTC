// @flow
import React, { Component, Fragment } from 'react';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {getProject, updateProject, removeProject, resetProjectTimes} from '../../db';

type State = {
	income: string,
	projectData: any
};
type Props = {
	match: any,
	history: any
};

class Advanced extends Component<Props, State> {
	state = {
		income: '',
		projectData: []
	};

	componentDidMount() {
		const { match: { params: { projectName } } } = this.props;
		this.setState({
			projectData: getProject(projectName),
			income: getProject(projectName).incomePerHours ? getProject(projectName).incomePerHours : ''
		});
	}

	handleRemoveProject = () => {
		const { match: { params: { projectName } }, history: { push } } = this.props;
		push('/');
		removeProject(projectName);
	};

	handleResetProjectTimes = () => {
		const { match: { params: { projectName } }, history: { goBack } } = this.props;
		goBack();
		resetProjectTimes(projectName);
	};

	handleInputChange = (event: any) => {
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
		const { history } = this.props;
		history.goBack();
	};

	handleUpdate = () => {
		const { match: { params: { projectName } }, history } = this.props;
		const { income } = this.state;
		updateProject(projectName, {
			incomePerHours: income
		});
		history.goBack();
	};

	render() {
		const { match: { params: { projectName } } } = this.props;
		const { income, projectData } = this.state;
		return (
			<Layout headerColor={projectData.color} header={this.renderHeader()}>
				<form>
					<Input
						label="Income per hours:"
						type="text"
						name="income"
						value={income}
						onlyNumber
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
				<Button
					style={{
						padding: '10px 20px',
						marginTop: 20,
						fontWeight: 'bold',
						backgroundColor: 'red'
					}}
					type="submit"
					onClick={this.handleRemoveProject}
				>
					Remove {projectName} Project
				</Button>
				<Button
					style={{
						padding: '10px 20px',
						marginTop: 20,
						fontWeight: 'bold',
						marginLeft: 10,
						backgroundColor: '#8e8e8e'
					}}
					type="submit"
					onClick={this.handleResetProjectTimes}
				>
					Reset Project Times
				</Button>
			</Layout>
		);
	}
}

export default Advanced;
