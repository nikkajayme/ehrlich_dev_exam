import React from 'react';

const Weather = () => {
    return (
        <>
            <section>
                <p>Bacolod City</p>
                <table>
                    <tr>
                        <td>Date</td>
                    </tr>
                    <tr>
                        <td>{`(mm/dd/yyyy)`}</td>
                        <td>{`Temp(F)`}</td>
                        <td>Description</td>
                        <td>Main</td>
                        <td>Pressure</td>
                        <td>Humidity</td>
                    </tr>
                    <tr>
                        {/* <td>{date}</td>
                        <td>{temp}</td>
                        <td>{description}</td>
                        <td>{main}</td>
                        <td>{pressure}</td>
                        <td>{humidity}</td> */}
                    </tr>
                </table>
                <button type="submit">back</button>
            </section>
        </>
    );
};

export default Weather;
