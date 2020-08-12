import React from 'react';
import { Link } from 'gatsby';

const Navegation = () => {
    return ( 
        <nav>
            <Link
                to={'/'}
            >Index</Link>
            <Link
                to={'/us'}
            >US</Link>
            <Link
                to={'/properties'}
            >Properties</Link>
        </nav>
     );
}
 
export default Navegation;