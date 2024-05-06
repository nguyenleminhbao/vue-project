// tailwind.config.js
// import typography from '@tailwindcss/typography'
// import forms from '@tailwindcss/forms'
import aspectRatio from '@tailwindcss/aspect-ratio'

const colors = {
  primary: '#000000',
  'secondary-blue': '#377DFF',
  'secondary-red': '#FF5630',
  'secondary-green': '#38CB89',
  'secondary-orange': '#FFAB00',

  'neutral-1': '#FEFEFE',
  'neutral-2': '#F3F5F7',
  'neutral-3': '#E8ECEF',
  'neutral-4': '#6C7275',
  'neutral-5': '#343839',
  'neutral-6': '#232627',
  'neutral-7': '#141718'
}

const fontSize = {
  'body-1-regular': [
    '26px',
    {
      lineHeight: '40px',
      fontWeight: '400'
    }
  ],
  'body-2-regular': [
    '22px',
    {
      lineHeight: '34px',
      fontWeight: '400'
    }
  ],
  'body-3-regular': [
    '20px',
    {
      lineHeight: '32px',
      fontWeight: '400'
    }
  ],
  'body-4-regular': [
    '18px',
    {
      lineHeight: '30px',
      fontWeight: '400'
    }
  ],
  'body-5-regular': [
    '16px',
    {
      lineHeight: '26px',
      fontWeight: '400'
    }
  ],
  'body-6-regular': [
    '14px',
    {
      lineHeight: '22px',
      fontWeight: '400'
    }
  ],
  'body-7-regular': [
    '12px',
    {
      lineHeight: '20px',
      fontWeight: '400'
    }
  ],

  'body-1-semibold': [
    '26px',
    {
      lineHeight: '40px',
      fontWeight: '600'
    }
  ],
  'body-2-semibold': [
    '22px',
    {
      lineHeight: '34px',
      fontWeight: '600'
    }
  ],
  'body-3-semibold': [
    '20px',
    {
      lineHeight: '32px',
      fontWeight: '600'
    }
  ],
  'body-4-semibold': [
    '18px',
    {
      lineHeight: '30px',
      fontWeight: '600'
    }
  ],
  'body-5-semibold': [
    '16px',
    {
      lineHeight: '26px',
      fontWeight: '600'
    }
  ],
  'body-6-semibold': [
    '14px',
    {
      lineHeight: '22px',
      fontWeight: '600'
    }
  ],
  'body-7-semibold': [
    '12px',
    {
      lineHeight: '20px',
      fontWeight: '600'
    }
  ],

  'body-1-bold': [
    '26px',
    {
      lineHeight: '40px',
      fontWeight: '700'
    }
  ],
  'body-2-bold': [
    '22px',
    {
      lineHeight: '34px',
      fontWeight: '700'
    }
  ],
  'body-3-bold': [
    '20px',
    {
      lineHeight: '32px',
      fontWeight: '700'
    }
  ],
  'body-4-bold': [
    '18px',
    {
      lineHeight: '30px',
      fontWeight: '700'
    }
  ],
  'body-5-bold': [
    '16px',
    {
      lineHeight: '26px',
      fontWeight: '700'
    }
  ],
  'body-6-bold': [
    '14px',
    {
      lineHeight: '22px',
      fontWeight: '700'
    }
  ],
  'body-7-bold': [
    '12px',
    {
      lineHeight: '20px',
      fontWeight: '700'
    }
  ]
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: colors,
      fontSize: fontSize,
      screens: {
        default: '1472px',
        xs: '600px',
        tablet: '601px'
      }
    }
  },
  plugins: [aspectRatio]
}
