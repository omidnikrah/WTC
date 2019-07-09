// @flow
import React, { Component, Fragment } from 'react';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import { StartStopButton } from './styles';
import { getProject, setTime, getProjectTimes } from '../../db';

class Project extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projectData: {},
			isStarted: false,
			timer: 0,
		};
	}

	componentDidMount() {
		const { match: { params: { projectName } } } = this.props;
		this.setState({
			projectData: getProject(projectName)
		});
	}

	componentWillUnmount() {
		const { match: { params: { projectName } } } = this.props;
		const { timer } = this.state;
		clearInterval(this.timerInterval);
		setTime(timer, projectName);
	}

	handleBack = () => {
		const { history } = this.props;
		history.back();
	};

	handleProjectAdvanced = () => {
		const { history: { push }, match: { params: { projectName } } } = this.props;
		push(`/project/${projectName}/advanced`);
	};

	renderFooter = () => {
		const { match: { params: { projectName } } } = this.props;
		const seconds = getProjectTimes(projectName);
		const totalIncome = this.calculateTotalIncome(seconds);
		return (
			<div className="project-footer">
				<span className="key-value">
					<span className="key">Total Time:</span>
					<span className="value">{this.secondsToNormalTime(seconds)}</span>
				</span>
				{totalIncome && (
					<span className="key-value">
						<span className="key">Total Income:</span>
						<span className="value">{totalIncome}</span>
					</span>
				)}
			</div>
		);
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

	calculateTotalIncome = (duration) => {
		const hours = Math.floor(duration / 3600);
		const { projectData } = this.state;
		if (projectData.incomePerHours && hours > 0) {
			return hours * projectData.incomePerHours;
		}
	};

	secondsToNormalTime = (duration) => {
		let hours = Math.floor(duration / 3600);
		let minutes = Math.floor((duration - hours * 3600) / 60);
		let seconds = duration - hours * 3600 - minutes * 60;

		hours = hours < 10 ? `0${hours}` : hours;
		minutes = minutes < 10 ? `0${minutes}` : minutes;
		seconds = seconds < 10 ? `0${seconds}` : seconds;
		if (hours > 0) {
			return `${hours}:${minutes}:${seconds}`;
		}
		return `${minutes}:${seconds}`;
	};

	handleClickStartButton = () => {
		const { isStarted, timer } = this.state;
		const { match: { params: { projectName } } } = this.props;
		if (!isStarted) {
			this.timerInterval = setInterval(() => {
				// eslint-disable-next-line no-shadow
				this.setState(({ timer }: any) => ({
					// eslint-disable-next-line no-param-reassign,no-plusplus
					timer: ++timer
				}));
			}, 1000);
		} else {
			clearInterval(this.timerInterval);
			setTime(timer, projectName);
			this.setState({
				timer: 0
			});
		}
		// eslint-disable-next-line no-shadow
		this.setState(({ isStarted }: any) => ({
			isStarted: !isStarted
		}));
	};

	render() {
		const { projectData, isStarted, timer } = this.state;
		return (
			<Layout headerColor={projectData.color} header={this.renderHeader()} footer={this.renderFooter()}>
				<StartStopButton isStarted={isStarted} onClick={this.handleClickStartButton} />
				<span className="working-time">{this.secondsToNormalTime(timer)}</span>
			</Layout>
		);
	}
}

export default Project;
