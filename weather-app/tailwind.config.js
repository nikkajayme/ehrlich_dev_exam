/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'dark-green': '#203523',
                'dark-teal': '#274143',
                batman: '#282828',
                'bright-teal': '#C4E8DD',
                'trans-teal': 'rgba(143, 223, 208, 0.12)',
            },
        },
    },
    plugins: [],
};
