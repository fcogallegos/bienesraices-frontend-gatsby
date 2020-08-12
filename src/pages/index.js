import React from 'react';
import Layout from '../components/layout';
import useIndex from '../hooks/useIndex';

const Index = () => {

    const index = useIndex();

    console.log(index);

    return ( 
        <Layout>
            <h1>Index</h1>
        </Layout>
     );
}
 
export default Index;