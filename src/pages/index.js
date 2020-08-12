import React from 'react';
import Layout from '../components/layout';
import useIndex from '../hooks/useIndex';

const Index = () => {

    const index = useIndex();

    const { name, content, image } = index[0];

    return ( 
        <Layout>
            <h1>{name}</h1>
            <p>{content}</p>
        </Layout>
     );
}
 
export default Index;