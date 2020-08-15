import React from 'react';
import Icons from './icons';

const PropertiePreview = ({ propertie }) => {

    const { name, description, image, wc, parking, rooms, price } = propertie;

    return ( 
       
        <div>
            <div>
                <h3>{name}</h3>

                <p>$ {price}</p>

                <Icons 
                    wc={wc}
                    parking={parking}
                    rooms={rooms}
                />
            </div>
        </div>
     );
}
 
export default PropertiePreview;