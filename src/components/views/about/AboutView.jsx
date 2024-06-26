import AboutCol from "./AboutCol"
import Curves from "@/components/visualEffects/Curves"
import DetailsCol from "./DetailsCol"

export default function AboutView({dict, lang}){
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
    <AboutCol dict={dict}/>
    <DetailsCol dict={dict} lang={lang} />
  </div>
}

