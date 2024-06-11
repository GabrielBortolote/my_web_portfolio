import Image from 'next/image'
import myPicture from '@/static/myPicture.svg'
import yellowStar from '@/static/yellowStar.svg'
import GradientBorders from '@/components/visualEffects/GradientBorders'
import Portfolio from './Porfolio'

export default function WhatIveDoneView({dict}){
  return <div className="
    hidden
    xl:flex flex-row
    flex-wrap lg:flex-nowrap
    text-light
  ">
    <div className="
      flex flex-col
      flex-1
      items-end
      justify-end 
      pr-12
      pb-12
    ">
      <Portfolio dict={dict} />
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
    />
  </GradientBorders>
}
