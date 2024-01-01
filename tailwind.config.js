/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            screens: {
                'xs': '450px',
            },
            backgroundColor: {
                "darkMode": "hsl(209, 23%, 22%)",
            },
            colors: {
                "darkMode": "hsl(207, 26%, 17%)",
                "lightMode": "hsl(0, 0%, 98%)",
                "dark-blue": "hsl(209, 23%, 22%)",
                "dark-white": "hsl(0, 0%, 100%)",
                "light-very-dark-blue": "hsl(200, 15%, 8%)",
                "light-dark-gray": "#ffffffc7",
            },
            fontSize: {
                '14': '14px',
                '16': '16px',
                '18': '18px',
            },
            fontWeight: {
                '300': '300',
                '600': '600',
                '800': '800',
            },
            boxShadow: {
                'light': '0+0+5px hsl(0, 0%, 52%)',
                'dark': '0+0+5px hsl(200, 15%, 8%)',
            }
        },
        variants: {},
        plugins: [],
    },
}