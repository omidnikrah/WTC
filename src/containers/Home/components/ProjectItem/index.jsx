// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import ProjectItemStyles from './styles';

const ProjectItem = ({ name, color }: any) => (
    <ProjectItemStyles color={color}>
        <Link to={`/project/${name}`}>
            {name}
        </Link>
    </ProjectItemStyles>
);

export default ProjectItem;
