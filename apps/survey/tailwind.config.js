const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    'libs/**/src/**/!(*.stories|*.spec).{ts,html}',
    ...createGlobPatternsForDependencies(__dirname),
  ],
  safelist: [
    "bg-danger",
    "bg-danger-surface",
    "bg-danger-border",
    "bg-danger-hover",
    "bg-danger-active",
    "bg-danger-focus",
    "bg-primary",
    "bg-primary-surface",
    "bg-primary-border",
    "bg-primary-hover",
    "bg-primary-active",
    "bg-primary-focus",
    "bg-secondary",
    "bg-secondary-surface",
    "bg-secondary-border",
    "bg-secondary-hover",
    "bg-secondary-active",
    "bg-secondary-focus",
    "bg-success",
    "bg-success-surface",
    "bg-success-border",
    "bg-success-hover",
    "bg-success-active",
    "bg-success-focus",
    "bg-info",
    "bg-info-surface",
    "bg-info-border",
    "bg-info-hover",
    "bg-info-active",
    "bg-info-focus",
    "text-danger",
    "text-danger-surface",
    "text-danger-border",
    "text-danger-hover",
    "text-danger-active",
    "text-danger-focus",
    "text-primary",
    "text-primary-surface",
    "text-primary-border",
    "text-primary-hover",
    "text-primary-active",
    "text-primary-focus",
    "text-secondary",
    "text-secondary-surface",
    "text-secondary-border",
    "text-secondary-hover",
    "text-secondary-active",
    "text-secondary-focus",
    "text-success",
    "text-success-surface",
    "text-success-border",
    "text-success-hover",
    "text-success-active",
    "text-success-focus",
    "text-info",
    "text-info-surface",
    "text-info-border",
    "text-info-hover",
    "text-info-active",
    "text-info-focus",
    "border-danger",
    "border-danger-surface",
    "border-danger-border",
    "border-danger-hover",
    "border-danger-active",
    "border-danger-focus",
    "border-primary",
    "border-primary-surface",
    "border-primary-border",
    "border-primary-hover",
    "border-primary-active",
    "border-primary-focus",
    "border-secondary",
    "border-secondary-surface",
    "border-secondary-border",
    "border-secondary-hover",
    "border-secondary-active",
    "border-secondary-focus",
    "border-success",
    "border-success-surface",
    "border-success-border",
    "border-success-hover",
    "border-success-active",
    "border-success-focus",
    "border-info",
    "border-info-surface",
    "border-info-border",
    "border-info-hover",
    "border-info-active",
    "border-info-focus",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.375rem'
    },
    extend: {
      fontSize: {
        '2xs': '0.625rem',
        'heading-sm': '1.25rem',
        'heading-base': '1.875rem',
        'heading-lg': '2.25rem',
        'heading-xl': '2.625rem'
      },
      borderRadius: {
        DEFAULT: '1rem',
        sm: '0.75rem'
      },
      colors: {
        primary: {
          DEFAULT: '#FE9B3D',
          surface: '#F7F5F2',
          border: '#FDE3B2',
          hover: '#E09609',
          active: '#7D560C',
          focus: 'rgba(250, 172, 24, 0.2)', // '#FAAC18',
        },
        secondary: {
          DEFAULT: '#4A3121',
          surface: '#F0EAE7',
          border: '#C3BAB5',
          hover: '#3E291C',
          active: '#251911',
          focus: 'rgba(74, 49, 33, 0.2)', // '#4A3121',
        },
        white: {
          DEFAULT: '#FFFFFF',
          hover: '#D4D4D4',
          active: '#808080',
        },
        black: {
          DEFAULT: '#1C1C1C',
          surface: '#F2F2F2',
          border: '#B3B3B3',
          hover: '#171717',
          active: '#0E0E0E',
          focus: 'rgba(28, 28, 28, 0.2)', // '#1C1C1C',
        },
        disabled: {
          DEFAULT: '#BBBBBB',
          surface: '#FAFAFA',
          border: '#E8E8E8',
        },
        danger: {
          DEFAULT: '#CB3A31',
          surface: '#FFF4F2',
          border: '#EEB3B0',
          hover: '#BD251C',
          active: '#731912',
        },
        success: {
          DEFAULT: '#43936C',
          surface: '#F7F7F7',
          border: '#B8DBCA',
          hover: '#387B5A',
          active: '#20573D',
        },
        warning: {
          DEFAULT: '#FFE221',
          surface: '#FFFFE5',
          border: '#F5EC9D',
          hover: '#D4BC1C',
          active: '#7D560C',
        },
      },
    },
  },
  plugins: [],
};
