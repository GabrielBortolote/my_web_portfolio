import Image from 'next/image'

export default function Curves({className}){
  return <Image 
    src={'/curves.svg'} width={1080} height={1080} alt='curves'
    className={`
      absolute left-0 w-[100vw]
      origin-center scale-x-125
      opacity-5
      -z-10
      ${className}
    `}
  />
}