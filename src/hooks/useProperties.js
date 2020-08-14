import { graphql, useStaticQuery } from 'gatsby';

const useProperties = () => {
    const data = useStaticQuery(graphql`
        query {
            allStrapiProperties {
              nodes {
                name
                description
                id
                wc
                price
                parking
                rooms
                category {
                  name
                }
                agent {
                  name
                  phone
                  email
                }
                image {
                    sharp: childImageSharp {
                        fluid( maxWidth: 600, maxHeight: 400 ) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
              }
            }
        }
    `);
    console.log(data);
}

export default useProperties;