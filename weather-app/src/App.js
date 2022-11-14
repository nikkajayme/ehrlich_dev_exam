import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import Weather from './components/Weather';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <>
            <Router>
                <Navbar />
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
            </Router>
        </>
    );
};

export default App;
