// @flow
import React, { Component, Fragment } from 'react';
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import ProjectItem from "./components/ProjectItem";

class Home extends Component {
    handleAddNewButtonClick = () => {
        console.log('add new button');
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

    render() {
        return (
            <Layout header={this.renderHeader()}>
                <ProjectItem name="Aparat" color="#DF0F50" />
                <ProjectItem name="Filimo" color="#FFBE00" />
                <ProjectItem name="Shab" color="#1862AE" />
            </Layout>
        );
    }
}
export default Home;
