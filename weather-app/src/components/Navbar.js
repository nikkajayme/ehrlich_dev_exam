import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { ReactComponent as Cloud } from '../assets/logos/cloud.svg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { logout, isAuthenticated } = useAuth0();
    const logoutWithRedirect = () =>
        logout({ returnTo: window.location.origin });

    return (
        <nav className="h-[104px] w-full bg-batman px-8 flex items-center drop-shadow-md justify-between relative">
            <Cloud />
            <div
                id="burger"
                className={`h-7 flex flex-col justify-between md:hidden ${
                    !isAuthenticated ? 'hidden' : 'none'
                }`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div
                    className={`h-1 bg-bright-teal w-10 rounded-sm transition ${
                        isOpen ? '-rotate-45 translate-y-4' : null
                    }`}
                />
                <div
                    className={`h-1 bg-bright-teal w-10 rounded-sm transition ${
                        isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                />
                <div
                    className={`h-1 bg-bright-teal w-10 rounded-sm transition ${
                        isOpen ? 'rotate-45 -translate-y-2' : null
                    }`}
                />
            </div>
            {isAuthenticated && (
                <button
                    className="bg-batman border-2 border-bright-teal px-14 py-2 rounded-full text-bright-teal hidden md:block"
                    onClick={() => logoutWithRedirect()}
                >
                    logout
                </button>
            )}
            <div
                className={`absolute z-10 bg-batman right-1/2 translate-x-1/2 h-[400px] top-36 drop-shadow-lg transition ${
                    isOpen ? 'none opacity-100' : 'hidden opacity-0'
                }`}
            >
                {isAuthenticated && (
                    <button
                        className="bg-batman border-2 border-bright-teal px-14 py-2 rounded-full text-bright-teal mt-16 mx-16"
                        onClick={() => logoutWithRedirect()}
                    >
                        logout
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

//TODO: create animation for opacity of burger menu, burger animation
