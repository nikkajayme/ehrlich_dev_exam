import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { ReactComponent as Cloud } from '../assets/logos/cloud.svg';

const Navbar = () => {
    const { logout, isAuthenticated } = useAuth0();

    const logoutWithRedirect = () =>
        logout({ returnTo: window.location.origin });

    return (
        <nav>
            <Cloud />
            <div id="burger">
                <span />
                <span />
                <span />
            </div>
            {isAuthenticated && (
                <button onClick={() => logoutWithRedirect()}>logout</button>
            )}
        </nav>
    );
};

export default Navbar;
