"use client"

import { useState } from 'react'
import {insertDarkPoint, numbers2keyframes} from './Utils'
import FlickTextAnimation from './FlickAnimation'
import PulseGlowAnimation from './PulseAnimation'


export default function NeonFlickAndPulseEffect({
  children,
  lightPoints=[10, 45, 50, 55, 75, 100, 101],
  flickAnimationDuration=3,
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

  // create keyframes to the animation
  const lightKeyframes = numbers2keyframes(lightPoints)
  const darkKeyframes = numbers2keyframes(darkPoints)
  
  // render
  const [flick, setFlick] = useState(true)
  if (flick){
    return (
      <FlickTextAnimation
        className='text-white'
        $color={neonColor}
        $lightFrames={lightKeyframes}
        $darkFrames={darkKeyframes}
        $duration={flickAnimationDuration}
        onAnimationEnd={() => setFlick(false)}
      >
        {children}
      </FlickTextAnimation>
    )
  }
  else {
    return (
      <PulseGlowAnimation $color={neonColor} className='text-white'>
        {children}
      </PulseGlowAnimation>
    )
  }
}
