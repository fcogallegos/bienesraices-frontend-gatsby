import React from 'react';
import { Link } from 'gatsby';
import Navegation from './navegation';

const Header = () => {
    return ( 

        <header>
            <div>
                <Link
                    to={'/'}
                >Bienes Raices</Link>

                <Navegation />
            </div>
        </header>
     );
}
 
export default Header;