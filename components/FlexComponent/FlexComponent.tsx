
import { styled, keyframes, darkTheme } from '../../stitches.config'
import { NextPage } from "next";
import { useState, useEffect } from "react";
import { VariantProps } from '@stitches/react';



type StackVariants = VariantProps<typeof Stack>;



const Stack = styled('div', {
    display: 'flex',
    variants: {
        wrap: {
            nowrap: {
                flexWrap: 'nowrap'
            },
            wrap: {
                flexWrap: 'wrap'
            }
        }, 
        alignItems: {
          start: {
            alignItems: 'start',
          },
          end: {
            alignItems: 'end',
          },
          center: {
            alignItems: 'center',
          },
          baseline: {
            alignItems: 'baseline',
          },
          stretch: {
            alignItems: 'stretch',
          },
        },
        direction: {
          column: {
            flexDirection: 'column',
          },
          'column-reverse': {
            flexDirection: 'column-reverse',
          },
          row: {
            flexDirection: 'row',
          },
          'row-reverse': {
            flexDirection: 'row-reverse',
          },
        },
        justifyContent: {
          start: {
            justifyContent: 'flex-start',
          },
          end: {
            justifyContent: 'flex-end',
          },
          center: {
            justifyContent: 'center',
          },
          'space-between': {
            justifyContent: 'space-between',
          },
          'space-around': {
            justifyContent: 'space-around',
          },
          'space-evenly': {
            justifyContent: 'space-evenly',
          },
        },
        gap: {
          0: {
            gap: 'none',
          },
          xs: {
            gap: '$xs',
          },
          sm: {
            gap: '$sm',
          },
          md: {
            gap: '$md',
          },
          lg: {
            gap: '$lg',
          },
          xl: {
            gap: '$xl',
          },
        },
    
    }
})

const FlexComponent: NextPage<StackVariants & React.HTMLAttributes<HTMLDivElement>> = ({wrap, children, direction, justifyContent, alignItems, gap}) => {
  return (
<Stack direction={direction} wrap={wrap} alignItems={alignItems} justifyContent={justifyContent} gap={gap}>{children}</Stack>
  )
}
export default FlexComponent
