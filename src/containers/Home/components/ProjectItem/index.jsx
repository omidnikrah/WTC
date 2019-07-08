// @flow
import React from 'react';
import ProjectItemStyles from './styles';

const ProjectItem = ({ name, color }) => (
    <ProjectItemStyles color={color}>
        {name}
    </ProjectItemStyles>
);

export default ProjectItem;
