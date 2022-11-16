import React, { useContext, useState } from 'react';

import { Navigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { WeatherContext } from '../contexts/WeatherContext';

const HomePage = () => {
    const { city, setCity } = useContext(WeatherContext);
    const [warning, setWarning] = useState(false);
    const { user, isLoading, isAuthenticated } = useAuth0();

    const handleSearch = (event) => {
        setCity(event.target.value);
    };
    const handleInput = () => {
        city ? setWarning(warning) : setWarning(!warning);
    };

    if (isLoading) {
        return (
            <section className="w-full h-screen bg-gradient-to-b from-dark-teal to-dark-green text-center">
                <p className="text-white text-2xl pt-14">Loading...</p>
            </section>
        );
    } else if (!isAuthenticated) {
        alert('User not logged in. Please login');
        return (
            <Navigate
                to="/"
                replace
            />
        );
    }
    return (
        <>
            <section className="w-full h-screen bg-gradient-to-b from-dark-teal to-dark-green text-center">
                <p className="text-bright-teal text-lg pt-14">Welcome!</p>
                {isLoading ? (
                    ''
                ) : (
                    <p className="text-white text-2xl">{user.name}</p>
                )}
                <input
                    type="text"
                    placeholder="City"
                    onChange={handleSearch}
                    value={city}
                    className="mt-20 w-[244px] h-[38px] rounded-full placeholder:italic placeholder:text-gray-600 pl-4"
                />
                <br />
                <Link to={`${city && '/weather'}`}>
                    <button
                        type="submit"
                        onClick={handleInput}
                        className="bg-batman border-2 border-bright-teal px-14 py-2 rounded-full text-bright-teal mt-10"
                    >
                        display
                    </button>
                </Link>
                {warning && <p>Please enter a city.</p>}
            </section>
        </>
    );
};

export default HomePage;
