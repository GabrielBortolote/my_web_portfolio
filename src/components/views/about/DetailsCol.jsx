"use client"

import { ReactFitty } from "react-fitty";

export default function DetailsCol(){
  return <div
    className="
      flex flex-col justify-end
      font-montserrat
      px-12 2xl:px-24
      pt-12 2xl:pt-24
    "
    style={{flex: '1 1 50%'}}
  >
    <HighlightContainer/>
    <DescriptionContainer/>
    <DownloadCVButton/>
  </div>
}

function HighlightContainer() {
  return <div className="flex flex-row flex-wrap pb-12 md:pb-24 justify-evenly">
    <Highlight title="xp years" content="6+"/>
    <Highlight title="english" content="fluent"/>
    <Highlight title="projects" content="20+"/>
    <Highlight title="degree" content={["computer", "science"]}/>
  </div>
}

function Highlight({title, content}) {
  if(!Array.isArray(content)) {
    content = [content]
  }
  return <div className="font-bold md:w-2/4 p-4 md:p-0">
    <span className="text-2xl tracking-widest">   
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

function DescriptionContainer(){
  return <div className="text-lg font-semibold">
    <h4
      className="text-softYellow font-kagitingan text-3xl w-full text-center"
    >
      <ReactFitty>
        Bring your ideas to life
      </ReactFitty>
    </h4>
    <p className="py-8">
      Software can be tricky when you do not have a dedicated partner to deliver it. Usually, IT professionals can not understand the partner{"\'"}s needs, leading them to implement poor and suboptimal solutions. 
    </p>
    <p className="pb-8">
      I use strong communication skills to understand the partner{"\'"}s needs and apply all my expertise in engineering IT projects to build the best solution possible.
    </p>
    <p className="pb-8">
      I have a complete and extensive CV, check it out yourself:
    </p>
  </div>
}

function DownloadCVButton(){
  return <a href={'/CV.pdf'}>
    <button className="
      bg-softYellow rounded w-full text-center p-4
      text-4xl font-kagitingan text-bold text-dark
      cursor-default`
    ">
      Download CV
    </button>
  </a>
}