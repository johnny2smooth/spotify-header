/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      boxShadow: {
        spotify: '0px 4px 60px rgb(0, 0, 0,50%)',
      },
      backgroundImage: {
        spotify:
          'linear-gradient(transparent 0,rgba(0,0,0,.5) 100%), url("spotify.svg")',
      },
    },
  },
  plugins: [],
};
