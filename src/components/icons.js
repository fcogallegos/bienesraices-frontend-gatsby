import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';



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

    console.log(icons);

    return ( 
        <ul>
            <li>{parking}</li>
        </ul>
     );
}
 
export default Icons;