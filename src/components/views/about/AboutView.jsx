import Image from 'next/image'
import AboutCol from "./AboutCol"
import DetailsCol from "./DetailsCol"
import ASkyFullOfStars from "@/components/visualEffects/ASkyFullOfStars"

export default function AboutView(){
  return <div className={`
  p-48
  w-full
  text-light
  flex
  flex-row
  font-montserrat
  relative
  overflow-hidden
  `}>
    <ASkyFullOfStars granularity={1000}/>
    <Image 
      src={'/curves.svg'} width={1080} height={1080} alt='curves'
      className='
        absolute left-0 top-0 w-[100vw]
        origin-center scale-x-125
        opacity-5
        -z-10
      '
    />
    <AboutCol />
    <DetailsCol />
  </div>
}

