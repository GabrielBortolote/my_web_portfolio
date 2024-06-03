import Image from 'next/image'
import curvesPic from '@/static/curves.svg'

export default function Curves({className}){
  return <Image 
    src={curvesPic} alt='curves'
    priority={true}
    className={`
      absolute left-0 w-[100vw]
      origin-center scale-x-125
      opacity-5
      -z-10
      ${className}
    `}
  />
}