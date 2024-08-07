const flowbite = require('flowbite-react/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Your existing content paths
    './src/**/*.{js,jsx,ts,tsx}', // Example path, adjust as needed
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#b77af1',
        'light-purple': '#d3b7f8',
      },
    },
  },
  plugins: [
    // Your existing plugins
    flowbite.plugin(),
  ],
};
