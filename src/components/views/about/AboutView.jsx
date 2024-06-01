import AboutCol from "./AboutCol"
import Curves from "@/components/visualEffects/Curves"
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
    <Curves className='hidden md:block'/>
    <ASkyFullOfStars granularity={1000}/>
    <AboutCol />
    <DetailsCol />
  </div>
}

