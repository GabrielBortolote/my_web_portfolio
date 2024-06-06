"use client"

import { ReactFitty } from "react-fitty";
import Curves from "@/components/visualEffects/Curves";

export default function DetailsCol({dict, lang}){
  return <div
    className="
      relative
      flex flex-col justify-end
      font-montserrat
      px-12 2xl:px-24
      pt-12 2xl:pt-24
    "
    style={{flex: '1 1 50%'}}
  >
    <Curves className='block md:hidden top-0'/>
    <Curves className='block md:hidden origin-center top-96'/>
    <HighlightContainer dict={dict}/>
    <DescriptionContainer dict={dict}/>
    <DownloadCVButton text={dict.downloadCV} lang={lang}/>
  </div>
}

function HighlightContainer({dict}) {
  return <div className="flex flex-row flex-wrap pb-12 md:pb-24 justify-evenly">
    <Highlight title={dict.xp} content="6+"/>
    <Highlight title={dict.englishLevelTitle} content={dict.englishLevelValue}/>
    <Highlight title={dict.projects} content="20+"/>
    <Highlight
      title={dict.degreeTitle}
      content={[dict.degreeFirstValue, dict.degreeSecondValue]}
    />
  </div>
}

function Highlight({title, content}) {
  if(!Array.isArray(content)) {
    content = [content]
  }
  return <div className="font-bold w-2/4 p-4 md:p-0">
    <span className="text-lg sm:text-2xl tracking-widest">   
      {title.toUpperCase()}
    </span>
    {content.map((item, index) => (
      <div key={index} className="flex flex-col">
        <ReactFitty
          className="text-softYellow"
          minSize={12}
          maxSize={120}
        >
          {item.toUpperCase()}
        </ReactFitty>
      </div>
    ))}
  </div>
}

function DescriptionContainer({dict}){
  return <div className="text-lg font-semibold">
    <h4
      className="text-softYellow font-kagitingan text-3xl w-full text-center"
    >
      <ReactFitty>
        {dict.description.title}
      </ReactFitty>
    </h4>
    <p className="py-8">
      {dict.description.paragraphs[0]}
    </p>
    <p className="pb-8">
      {dict.description.paragraphs[1]}
    </p>
    <p className="pb-8">
      {dict.description.paragraphs[2]}
    </p>
  </div>
}

function DownloadCVButton({text, lang}){
  return <a href={`/CV-${lang}.pdf`}>
    <button className="
      bg-softYellow rounded w-full text-center p-4
      text-4xl font-kagitingan text-bold text-dark
      cursor-default`
    ">
      {text}
    </button>
  </a>
}