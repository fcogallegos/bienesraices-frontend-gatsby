import React from 'react';

const PropertiePreview = ({ propertie }) => {

    const { name } = propertie;

    return ( 
        <h3>{name}</h3>
     );
}
 
export default PropertiePreview;