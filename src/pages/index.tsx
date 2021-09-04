import { graphql } from 'gatsby';
import React from 'react';
import Pomodoro from '../components/Pomodoro';

export const indexPageQuery = graphql`
    query IndexPageQuery {
        site {
            siteMetadata {
                name
                tagline
            }
        }
    }
`;

const IndexPage: React.FC = () => {
    return (
        <>
            <h1>POMODORO CLOCK</h1>
            <Pomodoro />
        </>
    );
};

export default IndexPage;
