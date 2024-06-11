import Image from 'next/image'
import myPicture from '@/static/myPicture.svg'
import yellowStar from '@/static/yellowStar.svg'
import GradientBorders from '@/components/visualEffects/GradientBorders'

export default function WhatIveDoneView({dict}){
  return <div className="
    flex flex-row
    flex-wrap lg:flex-nowrap
    text-light
  ">
    <div className="
      flex flex-col
      flex-1
      items-end
      border-red
      border-2
    ">
      Porfolio
    </div>
    <div className="
      flex-1
    ">
      <Picture />
    </div>
  </div>
}

function Picture(){
  const detail = <Image 
    src={yellowStar}
    alt='star'
  />

  return <GradientBorders size={4} detail={detail} detailSize={24}>
    <Image 
      src={myPicture}
      alt='Gabriel B. Picture'
      className=""
    />
  </GradientBorders>
   
 
}
