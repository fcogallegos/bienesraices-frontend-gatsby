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
                  publicURL
                }
              }
            }
        }
    `);
    return result;
}
 
export default useIndex;