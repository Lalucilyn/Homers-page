import type * as Stitches from '@stitches/react'
import { createStitches } from '@stitches/react'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  keyframes,
  theme,
} = createStitches({
  theme: {
    colors: {
      accent: '#64ffda',
      accent_dark: '#14cba8',
      accent_light: '#9effff',
      primary:'#ea80fc',
      primary_light: '#ffb2ff',
      primary_dark: '#b64fc8',
      text: '#212121',



      hiContrast: 'hsl(206,10%,5%)',
      loContrast: 'white',

      gray100: 'hsl(206,22%,99%)',
      gray200: 'hsl(206,12%,97%)',
      gray300: 'hsl(206,11%,92%)',
      gray400: 'hsl(206,10%,84%)',
      gray500: 'hsl(206,10%,76%)',
      gray600: 'hsl(206,10%,44%)',

      purple100: 'hsl(252,100%,99%)',
      purple200: 'hsl(252,100%,98%)',
      purple300: 'hsl(252,100%,94%)',
      purple400: 'hsl(252,75%,84%)',
      purple500: 'hsl(252,78%,60%)',
      purple600: 'hsl(252,80%,53%)',
    },
    space: {
      'none': '0px',
      'xxs': '4px',
      'xs': '8px',
      'sm': '12px',
      'md': '16px',
      'lg': '32px',
      'xl': '64px'
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
    },
    fontSizes: {
      'xs': '12px',
      'sm': '14px',
      'md': '16px',
      'lg': '18px',
      'xl': '32px',
      'xxl': '40px',
      'huge': '100px'
    },
    fonts: {
      display: 'Fredoka One',
    },
  },
  utils: {
    marginX: (value: Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    initial: '{max-width: 320px}',
    xxs: '(min-width: 320px)',
    xs: '(min-width: 768px)',
    sm: '(min-width: 980px)',
    md: '(min-width: 1400px)',
    lg: '(min-width: 1600px)',
  },
})

export const darkTheme = createTheme({
  colors: {
    accent: 'blue',
    hiContrast: 'hsl(206,2%,93%)',
    loContrast: 'hsl(206,8%,8%)',

    gray100: 'hsl(206,8%,12%)',
    gray200: 'hsl(206,7%,14%)',
    gray300: 'hsl(206,7%,15%)',
    gray400: 'hsl(206,7%,24%)',
    gray500: 'hsl(206,7%,30%)',
    gray600: 'hsl(206,5%,53%)',
  },
  space: {},
  fonts: {},
});