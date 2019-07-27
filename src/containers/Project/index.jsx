// @flow
import React, { Component, Fragment } from 'react';
import cron from 'node-cron';
import path from 'path';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import { StartStopButton } from './styles';
import { getProject, setTime, getProjectTimes, getSettings } from '../../db';
import PriceFormatter from '../../utils/PriceFormatter';

type State = {
	projectData: any,
	isStarted: boolean,
	timer: number
};
type Props = {
	match: any,
	history: any
};

class Project extends Component<Props, State> {
	constructor(props: any) {
		super(props);
		this.state = {
			projectData: {},
			isStarted: false,
			timer: 0
		};
		this.reminderCronJob = null;
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
		if (this.reminderCronJob) {
			this.reminderCronJob.destroy();
		}
	}

	handleBack = () => {
		const { history } = this.props;
		history.goBack();
	};

	handleProjectAdvanced = () => {
		const { history: { push }, match: { params: { projectName } } } = this.props;
		push(`/project/${projectName}/advanced`);
	};

	renderFooter = () => {
		const { match: { params: { projectName } } } = this.props;
		const { projectData } = this.state;
		const seconds = getProjectTimes(projectName);
		const totalIncome = this.calculateTotalIncome(seconds);
		return (
			<div className="project-footer">
				<span className="key-value">
					<span className="key">Total Time:</span>
					<span className="value">{this.secondsToNormalTime(seconds)}</span>
				</span>
				{projectData.incomePerHours && (
					<span className="key-value">
						<span className="key">Total Income:</span>
						<span className="value">{totalIncome || 0}</span>
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

	calculateTotalIncome = (duration: number) => {
		const hours = Math.floor(duration / 3600);
		const { projectData } = this.state;
		if (projectData.incomePerHours && hours > 0) {
			return PriceFormatter(hours * projectData.incomePerHours);
		}
	};

	secondsToNormalTime = (duration: number) => {
		let hours = Math.floor(duration / 3600);
		let minutes = Math.floor((duration - hours * 3600) / 60);
		let seconds = duration - hours * 3600 - minutes * 60;

		hours = hours < 10 ? `0${hours}` : hours;
		minutes = minutes < 10 ? `0${minutes}` : minutes;
		seconds = seconds < 10 ? `0${seconds}` : seconds;
		if (Number(hours) > 0) {
			return `${hours}:${minutes}:${seconds}`;
		}
		return `${minutes}:${seconds}`;
	};

	handleClickStartButton = () => {
		const { isStarted, timer } = this.state;
		const { match: { params: { projectName } } } = this.props;
		const settings = getSettings();
		const hasReminder = !!settings.reminderTime;
		let reminderTime = '';
		if (hasReminder) {
			if (settings.reminderTime.includes('-m')) {
				reminderTime = `*/${parseInt(settings.reminderTime)} * * * *`;
			} else if (settings.reminderTime.includes('-h')) {
				reminderTime = `*/${parseInt(settings.reminderTime)} * * *`;
			}
		}
		if (!isStarted) {
			this.timerInterval = setInterval(() => {
				// eslint-disable-next-line no-shadow
				this.setState(({ timer }: any) => ({
					// eslint-disable-next-line no-param-reassign,no-plusplus
					timer: ++timer
				}));
			}, 1000);
			if (hasReminder && reminderTime.length > 0) {
				this.reminderCronJob = cron.schedule(reminderTime, function() {
					new Notification('Reminder To STOP', {
						body: `Are you working right now on ${projectName} project?`,
						icon: path.join(__dirname, '../../resources/icons/64x64.png')
					});
				});
				this.reminderCronJob.start();
			}
		} else {
			clearInterval(this.timerInterval);
			setTime(timer, projectName);
			this.setState({
				timer: 0
			});
			if (this.reminderCronJob) {
				this.reminderCronJob.destroy();
			}
		}
		// eslint-disable-next-line no-shadow
		this.setState(({ isStarted }: any) => ({
			isStarted: !isStarted
		}));
	};

	timerInterval: any;

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
