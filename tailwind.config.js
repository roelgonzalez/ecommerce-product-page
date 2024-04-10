/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Kumbh Sans', 'ui-sans-serif', 'system-ui'],
            },
            colors: {
                'orange': '#ff7d1a',
                'pale-orange': '#ffede0',

                'very-dark-blue': '#1d2025',
                'dark-grayish-blue': '#68707d',
                'grayish-blue': '#b6bcc8',
                'light-grayish-blue': '#f7f8fd',
            },
            container: {
                center: true,
                padding: '1.5rem'
            }
        },
    },
    plugins: [],
}

