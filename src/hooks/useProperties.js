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
    //console.log(data);

    return data.allStrapiProperties.nodes.map(propertie => ({
        name: propertie.name,
        description: propertie.description,
        image: propertie.image,
        id: propertie.id,
        wc: propertie.wc,
        parking: propertie.parking,
        rooms: propertie.rooms,
        price: propertie.price,
        agent: propertie.agent,
        category: propertie.category
    }))

}

export default useProperties;