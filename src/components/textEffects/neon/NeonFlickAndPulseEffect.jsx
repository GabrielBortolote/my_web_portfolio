"use client"

import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import {insertDarkPoint, numbers2keyframes} from './Utils'

const intenseGlowTextShadow = (color) => `
  0px 0px 4px #fff,
  0px 0px 11px #fff,
  0px 0px 19px #fff,
  0px 0px 40px ${color},
  0px 0px 80px ${color},
  0px 0px 90px ${color},
  0px 0px 100px ${color},
  0px 0px 150px ${color}
`

const glowTextShadow = (color) => `
  0px 0px 2px #fff,
  0px 0px 4px #fff,
  0px 0px 6px #fff,
  0px 0px 10px ${color},
  0px 0px 45px ${color},
  0px 0px 55px ${color},
  0px 0px 70px ${color},
  0px 0px 80px ${color}
`


export default function NeonFlickAndPulseEffect({
  children,
  lightPoints=[10, 45, 50, 55, 75, 100, 101],
  flickDuration=3,
  neonColor='white',
}){
  // filter invalid light points
  lightPoints = lightPoints.filter(point => point >= 1 && point <= 100)
  
  // create dark points
  let darkPoints = [0]
  lightPoints.forEach(point => {
    insertDarkPoint(darkPoints, lightPoints, point-1)
    insertDarkPoint(darkPoints, lightPoints, point+1)
  });

  // create flick animation
  const flickKeyFrames = keyframes`
    ${numbers2keyframes(lightPoints)} {
      text-shadow: ${intenseGlowTextShadow(neonColor)};
    }
    ${numbers2keyframes(darkPoints)} {
      text-shadow: none;
    }
  `

  // create pulse glow animation
  const pulseGlowKeyFrames = keyframes`
    0% {
      text-shadow: ${intenseGlowTextShadow(neonColor)};
    }
    100% {
      text-shadow: ${glowTextShadow(neonColor)};
    }
  `

  const FlickText = styled.span`
    animation: ${flickKeyFrames} ${flickDuration}s linear 1;
  `

  const PulseGlowText = styled.span`
    animation: ${pulseGlowKeyFrames} 2s infinite alternate;
  `

  const [flick, setFlick] = useState(true)
  if (flick){
    return (
      <FlickText
        className='text-white'
        onAnimationEnd={() => setFlick(false)}
      >
        {children}
      </FlickText>
    )
  }
  else {
    return (
      <PulseGlowText className='text-white'>
        {children}
      </PulseGlowText>
    )
  }
}
