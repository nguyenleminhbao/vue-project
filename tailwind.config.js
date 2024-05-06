// tailwind.config.js
// import typography from '@tailwindcss/typography'
// import forms from '@tailwindcss/forms'
import aspectRatio from '@tailwindcss/aspect-ratio'
import { colors } from '@/system/color.ts'
import { fontSize } from '@/system/font.ts'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
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
