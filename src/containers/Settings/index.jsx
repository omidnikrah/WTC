// @flow
import React, { Component, Fragment } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Selectbox from '../../components/Selectbox';
import Layout from '../../components/Layout';
import { setReminderTime, getSettings } from '../../db';

type State = {};
type Props = {
	match: any,
	history: any
};

class Settings extends Component<Props, State> {
	state = {
		reminderTime: 0
	};

	componentDidMount() {
		const settings = getSettings();
		this.setState({
			reminderTime: settings.reminderTime
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
					Settings
				</span>
			</Fragment>
		);
	};

	handleBack = () => {
		const { history } = this.props;
		history.goBack();
	};

	handleInputChange = (event: any) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleUpdate = () => {
		const { reminderTime } = this.state;
		const { history } = this.props;
		setReminderTime(reminderTime);
		history.goBack();
	};

	render() {
		const { reminderTime } = this.state;
		return (
			<Layout header={this.renderHeader()}>
				<form>
					<Selectbox
						label="Remind to stop project every"
						name="reminderTime"
						value={reminderTime}
						onChange={this.handleInputChange}
						options={[
							{ value: 'disable', label: 'Disable Notification' },
							{ value: '10-m', label: '10 Minutes' },
							{ value: '20-m', label: '20 Minutes' },
							{ value: '30-m', label: '30 Minutes' },
							{ value: '40-m', label: '40 Minutes' },
							{ value: '50-m', label: '50 Minutes' },
							{ value: '1-h', label: '1 Hours' },
							{ value: '2-h', label: '2 Hours' },
							{ value: '3-h', label: '3 Hours' },
							{ value: '4-h', label: '4 Hours' },
							{ value: '5-h', label: '5 Hours' }
						]}
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

export default Settings;
