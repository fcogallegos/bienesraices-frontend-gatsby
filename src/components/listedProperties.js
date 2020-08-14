import React from 'react';
import { css } from '@emotion/core';
import useProperties from '../hooks/useProperties';

const ListedProperties = () => {

    const properties = useProperties();

    return ( 
        <h2
            css={css`
                margin-top: 5rem;
            `}
        >Our Properties</h2>
     );
}
 
export default ListedProperties;