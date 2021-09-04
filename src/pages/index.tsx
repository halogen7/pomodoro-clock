import { graphql } from 'gatsby';
import React from 'react';
import Clock from '../components/clock';

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
            <Clock />
        </>
    );
};

export default IndexPage;
