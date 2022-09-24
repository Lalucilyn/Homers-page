
import { styled, keyframes, darkTheme } from '../../stitches.config'
import { NextPage } from "next";
import { useState, useEffect } from "react";


interface Props {
  text: string;
}


const ParagraphText = styled('p', {
    fontFamily: 'sans-serif',
    fontSize: '$lg',
    lineHeight: '27px',
    color: '$text'
})


const Paragraph: NextPage<Props> = ({text}) => {


  
  return (
  <ParagraphText>{text}</ParagraphText>
  )
}

  
  export default Paragraph
