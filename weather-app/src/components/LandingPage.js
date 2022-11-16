import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LandingPage = () => {
    const { user, loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
    console.log(useAuth0());

    if (isLoading) {
        console.log('loading');
    } else if (!isAuthenticated) {
        console.log('authenticated: ', isAuthenticated);
    } else if (!isLoading && isAuthenticated) {
        console.log(user.name);
    }

    return (
        <section className="w-full h-screen bg-gradient-to-b from-dark-teal to-dark-green text-center">
            <p className="text-white text-2xl pt-14">Weather Forecast</p>
            <p className="max-w-[290px] mx-auto text-lg text-bright-teal mt-10">
                Welcome!
                <br />
                <br />
                Please login with your Github user to use the application and
                view the weather.
            </p>
            <button
                className="bg-batman border-2 border-bright-teal px-14 py-2 rounded-full text-bright-teal mt-16"
                onClick={() => loginWithRedirect({})}
            >
                login
            </button>
        </section>
    );
};

export default LandingPage;
