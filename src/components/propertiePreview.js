import React from 'react';
import Icons from './icons';
import styled from '@emotion/styled';


const Card = styled.div`
    border: 1px solid #E1E1E1;
    img {
        max-width: 100%;
    }
`;

const Content = styled.div`
    padding: 2rem;
    h3 {
        font-family: 'Lato', sans-serif;
        margin: 0 0 2rem 0;
        font-size: 2.4rem;
    }
    .price {
        font-size: 2rem;
        color: #75AB00;
    }
`;

const PropertiePreview = ({ propertie }) => {

    const { name, description, image, wc, parking, rooms, price } = propertie;

    return ( 
       
        <Card>
            <Content>
                <h3>{name}</h3>

                <p className="price">$ {price}</p>

                <Icons 
                    wc={wc}
                    parking={parking}
                    rooms={rooms}
                />
            </Content>
        </Card>
     );
}
 
export default PropertiePreview;