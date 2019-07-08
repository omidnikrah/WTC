// @flow
import React, { Component, Fragment } from 'react';
import { remote } from 'electron';
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import ProjectItem from "./components/ProjectItem";

class Home extends Component {
    handleAddNewButtonClick = () => {
        console.log('add new button');
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
            <button
                type="button"
                className="icon icon-exit"
                onClick={this.handleExit}
            />
            <button
                type="button"
                className="icon icon-settings"
                onClick={this.handleGoToSettings}
            />
        </div>
    );

    render() {
        return (
            <Layout header={this.renderHeader()} footer={this.renderFooter()}>
                <ProjectItem name="Aparat" color="#DF0F50" />
                <ProjectItem name="Filimo" color="#FFBE00" />
                <ProjectItem name="Shab" color="#1862AE" />
            </Layout>
        );
    }
}
export default Home;
