import Curves from "@/components/visualEffects/Curves";
import Highlights from "./Highlights";

export default function DetailsCol({dict, lang}){
  return <div
    className="
      relative
      flex flex-col justify-start
      items-center lg:items-stretch
      font-montserrat
      px-12 xs:px-24 sm:px-48
      lg:pl-0 2xl:pl-24
      lg:pr-12 xl:pr-[8%] 2xl:pr-[20%]
    "
    style={{flex: '1 1 50%'}}
  >
    <Curves className='block md:hidden top-0'/>
    <Curves className='block md:hidden origin-center top-96'/>
    <Highlights dict={dict}/>
    <Description dict={dict}/>
    <DownloadCVButton text={dict.downloadCV} lang={lang}/>
  </div>
}


function Description({dict}){
  return <div className="
    text-md xs:text-lg
    font-semibold
    pt-6 sm:pt-20

  ">
    <h4 className="
      w-full
      text-center
      text-softYellow font-kagitingan
      text-xl xs:text-2xl sm:text-4xl
    ">
      {dict.description.title}
    </h4>
    <p className="py-4 xs:py-8">
      {dict.description.paragraphs[0]}
    </p>
    <p className="pb-4 xs:pb-8">
      {dict.description.paragraphs[1]}
    </p>
    <p className="pb-8">
      {dict.description.paragraphs[2]}
    </p>
  </div>
}

function DownloadCVButton({text, lang}){
  return <a href={`/CV-${lang}.pdf`} className="self-stretch">
    <button className="
      bg-softYellow rounded w-full text-center p-4
      text-2xl xs:text-4xl font-kagitingan text-bold text-dark
      cursor-default`
    ">
      {text}
    </button>
  </a>
}