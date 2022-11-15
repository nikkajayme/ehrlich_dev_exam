import React, { useContext, useState } from 'react';

import { Link } from 'react-router-dom';

import { WeatherContext } from '../contexts/WeatherContext';

const HomePage = () => {
    const { city, setCity } = useContext(WeatherContext);
    const [warning, setWarning] = useState(false);
    const handleSearch = (event) => {
        setCity(event.target.value);
    };
    const handleInput = () => {
        city ? setWarning(warning) : setWarning(!warning);
    };

    console.log(warning);
    return (
        <>
            <section>
                <p>Welcome!</p>
                <p>John Smith</p>
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
