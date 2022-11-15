import React, { useEffect, useState } from 'react';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import Weather from './components/Weather';
import Navbar from './components/Navbar';

import { WeatherContext } from './contexts/WeatherContext';

const App = () => {
    const [city, setCity] = useState(localStorage.getItem('city'));

    useEffect(() => {
        localStorage.setItem('city', city);
    });

    return (
        <>
            <Router>
                <Auth0ProviderWithHistory>
                    <Navbar />
                    <WeatherContext.Provider value={{ city, setCity }}>
                        <Routes>
                            <Route
                                path="/"
                                element={<LandingPage />}
                            />
                            <Route
                                path="/home"
                                element={<HomePage />}
                            />
                            <Route
                                path="/weather"
                                element={<Weather />}
                            />
                        </Routes>
                    </WeatherContext.Provider>
                </Auth0ProviderWithHistory>
            </Router>
        </>
    );
};

export default App;
