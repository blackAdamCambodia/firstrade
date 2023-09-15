/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: theme => ({
        'primary': '#03468e',
        "secondary": "#4d6582",
        "primaryLight":"#f3f9ff",
        "warning":"#fc8d42"
           }),
        backgroundColor: theme => ({
           'primary': '#03468e',
           "secondary": "#4d6582",
           "primaryLight":"#f3f9ff",
           "warning":"#fc8d42"
              }),
             
    },
   
  },
  plugins: [],
}

