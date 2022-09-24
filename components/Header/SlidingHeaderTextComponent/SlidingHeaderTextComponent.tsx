import { styled, keyframes, darkTheme } from '../../../stitches.config'
import { NextPage } from "next";
import { useState, useEffect } from "react";


interface Props {
  text: string;
  css?: any,
  delay?: number
}

const slideUp = keyframes({
  '0%': { transform: 'translateY(50%)' },
  '100%': { transform: 'translateY(0%)' },
});






const Box = styled('div', {
  display: 'flex',
  overflow: 'hidden',
  height: '51px',
  '@sm': {
    height: '124px'

  }
})

const Gap = styled('span', {
 width: '10px',
  '@sm': {
  width: '18px',


}
})


const SlidingText: NextPage<Props> = ({text, css, delay=0}) => {

  const delays: any = () => {
    const widths: any[] = [];
    for (let i = 0; i <= 24; i++) {
      widths.push({ animationDelay: `${delay + (i + 1) * 100}ms` });
    }
    return widths;
  };
  

const Text = styled('span', {
  display: 'block',
  fontSize: '$xxl',
  fontFamily: '$display',
  textShadow: '4px 4px $colors$accent',
  animation: `${slideUp} 500ms`,
  variants: {
    delay: {...delays()}
  },
  '@sm': {
    fontSize: '$huge',

  }
});

  
  return (
  <Box css={css}>
    {text.split('').map((letter, index) => {
      return letter !== ' ' ? <Text key={letter + index} delay={index}>{letter}</Text> : <Gap></Gap>}
     )}
  </Box>
  )
}

  
  export default SlidingText