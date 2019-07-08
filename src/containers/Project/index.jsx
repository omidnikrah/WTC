// @flow
import React, {Component, Fragment} from 'react';
import ProjectItem from "../Home/components/ProjectItem";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import { StartStopButton } from './styles';

class Project extends Component {

    renderHeader = () => {
        const { match: { params: { projectName } } } = this.props;
        return (
            <Fragment>
                <button
                    type="button"
                    className="icon icon-back"
                    onClick={this.handleBack}
                />
                <span>{projectName}</span>
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
    }

    handleBack = () => {
        history.back();
    }

    handleProjectAdvanced = () => {
        console.log('advanced');
    }

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
        return (
            <Layout headerColor="#1862AE" header={this.renderHeader()} footer={this.renderFooter()}>
                <StartStopButton isStarted={false} />
                <span className="working-time">00:00</span>
            </Layout>
        );
    }
}

export default Project;
