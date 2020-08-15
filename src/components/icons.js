import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';


const ListedIcons = styled.ul`
    display: flex;
    justify-content: space-between;
    flex: 1;
    max-width: 500px;
    margin: 3rem auto 0 auto;

    li {
        display: flex;
        img {
            margin-right: 1rem;
        }
    }
`;

const Icons = ({wc, parking, rooms}) => {

    const { icons } = useStaticQuery(graphql`
        query {
            icons: allFile(filter : { relativeDirectory : { eq: "icons" } }) {
              edges {
                node {
                  id
                  publicURL
                }
              }
            }
        }
    `);

    const imagesIcons = icons.edges;

    return ( 
        <ListedIcons>
            <li>
                <img src={imagesIcons[5].node.publicURL} alt="icon wc" />
                <p>{wc}</p>
            </li>
            <li>
                <img src={imagesIcons[4].node.publicURL} alt="icon parking" />
                <p>{parking}</p>
            </li>
            <li>
                <img src={imagesIcons[3].node.publicURL} alt="icon rooms" />
                <p>{rooms}</p>
            </li>
        </ListedIcons>
     );
}
 
export default Icons;