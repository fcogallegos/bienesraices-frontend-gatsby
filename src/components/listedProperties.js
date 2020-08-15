import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core';
import useProperties from '../hooks/useProperties';
import PropertiePreview from './propertiePreview';
import listedPropertiesCSS from '../css/listedProperties.module.css';

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

        <ul className={listedPropertiesCSS.properties}>
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