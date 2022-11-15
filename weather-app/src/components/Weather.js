import React, { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

import { WeatherContext } from '../contexts/WeatherContext';

const Weather = () => {
    const [weather, setWeather] = useState([]);
    const [main, setMain] = useState([]);
    const [desc, setDesc] = useState([]);
    const { city } = useContext(WeatherContext);

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

    console.log(weather);

    return (
        <>
            <section>
                <p>{weather.name}</p>
                <p>{weather.dt}</p>
                <p>{main.temp}</p>
                <p>{main.pressure}</p>
                <p>{main.humidity}</p>
                <p>{desc.description}</p>
                <p>{desc.main}</p>
                {/* <table>
                    <thead>
                        <tr>
                            <td>
                                {`(mm/dd/yyyy)`}
                                {weather.dt}
                            </td>
                            <td>{`Temp(F)`}</td>
                            <td>Description</td>
                            <td>Main</td>
                            <td>Pressure</td>
                            <td>Humidity</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{weather.dt}</td>
                            <td>{weather['main'].temp}</td>
                            <td>{weather.weather[0].description}</td>
                            <td>{weather.weather[0].main}</td>
                            <td>{weather.main.pressure}</td>
                            <td>{weather.main.humidity}</td>
                        </tr>
                    </tbody>
                </table> */}
                <Link to="/home">
                    <button>back</button>
                </Link>
            </section>
        </>
    );
};

export default Weather;
