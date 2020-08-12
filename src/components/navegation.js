import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;

    @media (min-width: 768px) {
        padding: 0;
        flex-direction: row;
    }
`;

const NavLink = styled(Link)`
    color: #FFF;

`;

const Navegation = () => {
    return ( 
        <Nav>
            <NavLink
                to={'/'}
            >Index</NavLink>
            <NavLink
                to={'/us'}
            >US</NavLink>
            <NavLink
                to={'/properties'}
            >Properties</NavLink>
        </Nav>
     );
}
 
export default Navegation;