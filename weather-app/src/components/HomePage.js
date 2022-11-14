import React from 'react';

const HomePage = () => {
    return (
        <>
            <section>
                <p>Welcome!</p>
                <p>John Smith</p>
                <input
                    type="text"
                    // value={city}
                    placeholder="City"
                />
                <button type="submit">display</button>
            </section>
        </>
    );
};

export default HomePage;
