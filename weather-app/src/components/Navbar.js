import React from 'react';

import { ReactComponent as Cloud } from '../assets/logos/cloud.svg';
const Navbar = () => {
    return (
        <nav>
            <Cloud />
            <div id="burger">
                <span />
                <span />
                <span />
            </div>
            <button>logout</button>
        </nav>
    );
};

export default Navbar;
