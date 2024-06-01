import Image from 'next/image'
import AboutCol from "./AboutCol"
import DetailsCol from "./DetailsCol"
import ASkyFullOfStars from "@/components/visualEffects/ASkyFullOfStars"

export default function AboutView(){
  return <div className={`
  relative
  py-24
  w-full
  text-light font-montserrat
  flex
  flex-row
  justify-center
  flex-wrap
  lg:flex-nowrap
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

