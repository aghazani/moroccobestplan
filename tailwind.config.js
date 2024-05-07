/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accentColor1_1: '#FF4141',
        accentColor1_2: '#FF0606',
        accentColor2_1: '#306C14',
        accentColor2_2: '#4EAB21',
      },
    },
  },
  plugins: [],
}
