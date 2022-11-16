import React, { useContext, useEffect, useState } from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import { Link, Navigate } from 'react-router-dom';

import axios from 'axios';

import { WeatherContext } from '../contexts/WeatherContext';

const Weather = () => {
    const [weather, setWeather] = useState([]);
    const [main, setMain] = useState([]);
    const [desc, setDesc] = useState([]);
    const { city } = useContext(WeatherContext);

    const { isLoading, isAuthenticated } = useAuth0();

    const API_KEY = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
            )
            .then((response) => {
                setWeather(response.data);
                setMain(response.data.main);
                setDesc(response.data.weather[0]);
            })
            .catch((error) => console.log(error));
    }, [city]);

    console.log(isAuthenticated);
    console.log(weather);

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
            {isLoading ? (
                <p>loading...</p>
            ) : (
                <section className="w-full h-screen bg-gradient-to-b from-dark-teal to-dark-green text-center">
                    <p className="text-2xl text-center text-white pt-10">
                        {weather.name}
                    </p>
                    <table className="text-left bg-trans-teal w-[285px] mx-auto mt-10 text-bright-teal text-md">
                        <thead>
                            <tr className="h-16 border-b border-bright-teal">
                                <td className="pl-2">
                                    <p>Date</p>
                                </td>
                                <td>
                                    <p>
                                        {new Date(
                                            weather.dt * 1000
                                        ).toDateString()}
                                    </p>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="h-16 border-b border-bright-teal">
                                <td className="pl-2">
                                    <p>Temp</p>
                                </td>
                                <td>
                                    <p>{main.temp}</p>
                                </td>
                            </tr>
                            <tr className="h-16 border-b border-bright-teal">
                                <td className="pl-2">
                                    <p>Pressure</p>
                                </td>
                                <td>
                                    <p>{main.pressure}</p>
                                </td>
                            </tr>
                            <tr className="h-16 border-b border-bright-teal">
                                <td className="pl-2">
                                    <p>Humidity</p>
                                </td>
                                <td>
                                    <p>{main.humidity}</p>
                                </td>
                            </tr>
                            <tr className="h-16">
                                <td className="pl-2">
                                    <p>Desc</p>
                                </td>
                                <td>
                                    <p>{desc.description}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <Link to="/home">
                        <button className="bg-batman border-2 border-bright-teal px-14 py-2 rounded-full text-bright-teal mt-10">
                            back
                        </button>
                    </Link>
                </section>
            )}
        </>
    );
};

export default Weather;
