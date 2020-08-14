import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core';
import useProperties from '../hooks/useProperties';
import PropertiePreview from './propertiePreview';

const ListedProperties = () => {

    const result = useProperties();
    const [ properties, saveProperties ] = useState([]);

    useEffect(() => {
        saveProperties(result);
    }, [])

    //console.log(properties);

    return ( 
       <>
        <h2
            css={css`
                margin-top: 5rem;
            `}
        >Our Properties</h2>

        <ul>
            {properties.map( propertie => (
                <PropertiePreview 
                    key={propertie.id}
                    propertie={propertie}
                />
            ))}
        </ul>
       </>
     );
}
 
export default ListedProperties;