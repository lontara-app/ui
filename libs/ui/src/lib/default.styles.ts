import { LontaraConfiguration } from "../interfaces/lontara.styles";

export const DefaultStyles: LontaraConfiguration = {
  uploadApiUrl: '',
    colors: {
      surface: '#F8F9FA',
      primary: {
        main: '#44B9E2',
        surface: '#C1E8F5',
        border: '#A1DCF0',
        hover: '#82D0EC',
        pressed: '#63C5E7',
        focus: '#DAF1F9',
        text: '#FFFFFF'
      },
      secondary: {
        main: '#DAF1F9',
        surface: '#44B9E2',
        border: '#63C5E7',
        hover: '#82D0EC',
        pressed: '#A1DCF0',
        focus: '#399ABC',
        text: '#1c1c1c'
      },
      black: {
        main: '#1C1C1C',
        surface: '#B3B3B3',
        border: '#8D8D8D',
        hover: '#686868',
        pressed: '#424242',
        focus: '#D2D2D2',
        text: '#FFFFFF'
      },
      disabled: {
        main: '#A2A4A6',
        surface: '#F3F3F4',
        border: '#D6D8DA',
        hover: '',
        pressed: '',
        focus: '',
        text: '#1c1c1c'
      },
      gray: {
        main: '#C2C5C7',
        surface: '#EBECEC',
        border: '#E0E2E3',
        hover: '#D6D8DA',
        pressed: '#CCCFD0',
        focus: '#F3F3F4',
        text: '#1c1c1c'
      },
      softGray: {
        main: '#E9EDEF',
        surface: 'F8F9FA',
        border: '#F4F6F7',
        hover: '#F0F3F4',
        pressed: '#EDF0F2',
        focus: '#FBFBFC',
        text: '#1c1c1c'
      },
      info: {
        main: '#44B9E2',
        surface: '#C1E8F5',
        border: '#A1DCF0',
        hover: '#82D0EC',
        pressed: '#63C5E7',
        focus: '',
        text: '#ffffff'
      },
      success: {
        main: '#60AB9A',
        surface: '#CAE3DD',
        border: '#AFD5CC',
        hover: '#95C7BC',
        pressed: '#7BB9AB',
        focus: '',
        text: '#ffffff'
      },
      danger: {
        main: '#FED766',
        surface: '#FFF2CC',
        border: '#FEEBB2',
        hover: '#FEE499',
        pressed: '#FEDE80',
        focus: '',
        text: '#ffffff'
      },
      warning: {
        main: '#FED766',
        surface: '#FFF2CC',
        border: '#FEEBB2',
        hover: '#FEE499',
        pressed: '#FEDE80',
        focus: '',
        text: '#ffffff'
      }
    },
    fonts: {
      fontFamily: 'Inter, sans-serif',
      secondaryFontFamily: 'Inter, sans-serif',
      size: {
        '2xs': '0.625rem',
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.375rem',
        headingSm: '1.5rem',
        heading: '1.875rem',
        headingLg: '2.25rem',
        headingXl: '2.625rem',
      }
    }
  }