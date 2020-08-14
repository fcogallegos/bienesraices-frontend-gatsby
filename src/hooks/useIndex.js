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
                      fluid( maxWidth: 1200 ) {
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