
import { styled, keyframes, darkTheme } from '../../stitches.config'
import { NextPage } from "next";
import { useState, useEffect } from "react";
import { VariantProps } from '@stitches/react';

interface Props {
    flexBasis: string;
    css?: any
  }

const FlexItem: NextPage<Props & React.HTMLAttributes<HTMLDivElement>> = ({css, children, flexBasis}) => {

    const FlexItem = styled('div', {
        flexBasis: flexBasis
    })

return (
  <FlexItem css={css}>{children}</FlexItem>
    )
  }
  export default FlexItem