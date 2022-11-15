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
        <>
            <section>
                <p>Weather Forecast</p>
                <p>
                    Welcome
                    <br />
                    Please login with you Github user to use the application and
                    view the weather.
                </p>
                <button onClick={() => loginWithRedirect({})}>login</button>
            </section>
        </>
    );
};

export default LandingPage;
