import { graphql, useStaticQuery } from 'gatsby';


const useIndex = () => {
    
    const result = useStaticQuery(graphql`
        query {
            allStrapiPages(filter: { name: { eq: "Index"} }){
              nodes {
                id  
                name
                content
                image {
                  sharp: childImageSharp {
                      fluid( maxWidth: 1300 duotone: {
                        highlight: "#222222", shadow: "192550", opacity: 30
                      }) {
                          ...GatsbyImageSharpFluid_withWebp
                      }
                  }
                }
              }
            }
        }
    `);
    
    return result.allStrapiPages.nodes.map( index => ({
        name: index.name,
        content: index.content,
        image: index.image
    }))
}
 
export default useIndex;