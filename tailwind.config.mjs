/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#1e40af',
          secondary: 'oklch(0.65 0.05 256)',
          accent: '#059669',
        },
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          'base-100': 'oklch(0.22 0.03 278)',
          primary: '#3b82f6',
          secondary: 'oklch(0.75 0.05 256)',
          accent: '#34d399',
        },
      },
    ],
  },
};
