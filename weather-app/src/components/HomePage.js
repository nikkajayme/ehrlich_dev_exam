import React, { useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { WeatherContext } from '../contexts/WeatherContext';

const HomePage = () => {
    const { city, setCity } = useContext(WeatherContext);
    const [warning, setWarning] = useState(false);
    const { user } = useAuth0();

    const handleSearch = (event) => {
        setCity(event.target.value);
    };
    const handleInput = () => {
        city ? setWarning(warning) : setWarning(!warning);
    };

    return (
        <>
            <section>
                <p>Welcome!</p>
                <p>{user.name}</p>
                <input
                    type="text"
                    placeholder="City"
                    onChange={handleSearch}
                    value={city}
                />
                <Link to={`${city && '/weather'}`}>
                    <button
                        type="submit"
                        onClick={handleInput}
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
