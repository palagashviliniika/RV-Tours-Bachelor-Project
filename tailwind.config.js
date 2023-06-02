const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors:{
                "snowWhite":{
                    DEFAULT: "#fffafa"
                },
                "rust":{
                    DEFAULT: "#B7410E",
                    hover: "#AB3C0D"
                },
                backgroundImage: {
                    'landing-one': "url('/public/images/landingpic.jpg')"
                }
            }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
