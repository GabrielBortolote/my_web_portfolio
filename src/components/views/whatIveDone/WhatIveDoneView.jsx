import Image from 'next/image'
import myPicture from '@/static/myPicture.svg'
import yellowStar from '@/static/yellowStar.svg'
import GradientBorders from '@/components/visualEffects/GradientBorders'
import Portfolio from './Porfolio'

export default function WhatIveDoneView({dict}){
  return <div className="
    flex flex-row
    justify-end
    flex-wrap-reverse lg:flex-nowrap
    text-light
  ">
    <div className="
      flex flex-col
      items-end justify-end 
      px-4 sm:px-12
      lg:pb-12
      flex-grow-0
      w-auto
    ">
      <Portfolio dict={dict} />
    </div>
    <div className='
      flex-grow-0
    '>
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
