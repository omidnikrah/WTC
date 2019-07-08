// @flow
import React, { Component, Fragment } from 'react';
import Layout from "../../components/Layout";
import Button from "../../components/Button";

class Advanced extends Component {
  renderHeader = () => {
    const { match: { params: { projectName } } } = this.props;
    return (
        <Fragment>
            <button
                type="button"
                className="icon icon-back"
                onClick={this.handleBack}
            />
            <span style={{
                fontWeight: 'bold',
                fontSize: 17,
            }}>{projectName} Advanced</span>
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
          Advanced
      </Layout>
    );
  }
}

export default Advanced;