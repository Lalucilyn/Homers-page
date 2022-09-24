
import { styled, keyframes, darkTheme } from '../../../stitches.config'
import { NextPage } from "next";

interface Props {
}

const Spin = keyframes({
    to: {
        transform: 'rotate(360deg)'
    }
})

const Rock = keyframes({
    '0%': {
        transform: 'rotate(-0deg)'
    },
    '25%': {
        transform: 'rotate(-20deg)'
    },
    '50%': {
        transform: 'rotate(0deg)'
    },    
    '75%': {
        transform: 'rotate(20deg)'
    },  
    '100%': {
        transform: 'rotate(0deg)'
    } 

})

const BlockSlide = keyframes({
    from: {
        transform: 'translateX(0%)'
    },
    to: {
        transform: 'translateX(-100%)'
    }
})

const SlideDown = keyframes({
    from: {
        opacity: '0',
        transform: 'translateY(-20%)'
    },
    to: {
        opacity: '1',
        transform: 'translateY(0%)'
    }
})


const HeaderImageContainer = styled('div', {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    animation: `${SlideDown} 1000ms linear`,
    animationFillMode: 'forwards',
    opacity: 0,
    marginTop: '$md',
    '@sm': {
        margin: '0px'
    }
})

const Blob = styled('img', {
    width: '40%',
    position: 'absolute',
    bottom: '-25%',
    left: '-5%',
    zIndex: '-1',
    animation: `${Rock} 10s infinite linear`,
    animationDelay: '2100ms'
})
const Sun = styled('img', {
    position: 'absolute',
    right: '-2%',
    zIndex: '-1',
    top: '-20%',
    animation: `${Spin} 4s infinite linear`,
    animationDelay: '2100ms'
})

const ProfilePic = styled('img', {
    display: 'block',
    borderRadius: '16px',
    width: '100%',
    
})

const ScrollRevealContainer = styled('div', {
    position: 'relative',
    width: '80%',
})

const HiddenOverflow = styled('div', {
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    overflow: 'hidden',
    borderRadius: '16px'
})
const BlockReveal = styled('div', {
    backgroundColor: '$primary_dark',
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    animation: `${BlockSlide} 1s linear`,
    animationFillMode: 'forwards',
    zIndex: '1'

}) 

const HeaderImage: NextPage<Props> = () => {


  return (
    <HeaderImageContainer>
    <Blob src="images/blob.svg"/>
    <Sun src="images/sun.svg"/>
    <ScrollRevealContainer>
    <ProfilePic src="images/photo.jpg"/>
    <HiddenOverflow>
    <BlockReveal/>
    </HiddenOverflow>
    </ScrollRevealContainer>
    </HeaderImageContainer>
    
  )
}
export default HeaderImage
