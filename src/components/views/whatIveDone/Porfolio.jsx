'use client'

import { useState } from 'react'
import ModernBankApp from '@/static/ModernBankApp.svg'
import DataPipeline from '@/static/DataPipeline.svg'
import MensClothesStore from '@/static/MensClothesStore.svg'
import TicTacToeImage from '@/static/TicTacToeImage.svg'
import PortfolioItem from './PortfolioItem'

export default function Portfolio({dict}){
  const items = [
    {
      title: dict.portfolioItems.bankApp.title,
      description: dict.portfolioItems.bankApp.description,
      image: ModernBankApp,
      link: 'https://gabrielbortolote.github.io/ReactBankApp/',
    },
    {
      title: dict.portfolioItems.dataPipeline.title,
      description: dict.portfolioItems.dataPipeline.description,
      image: DataPipeline,
      link: 'https://github.com/GabrielBortolote/data-pipeline-with-python',
    },
    {
      title: dict.portfolioItems.mensClothesShop.title,
      description: dict.portfolioItems.mensClothesShop.description,
      image: MensClothesStore,
      link: 'https://www.figma.com/proto/MfTtOPp8UNyGfGs1lURrld/Abisai-Landing-Page?node-id=147-365',
    },
    {
      title: dict.portfolioItems.ticTacToe.title,
      description: dict.portfolioItems.ticTacToe.description,
      image: TicTacToeImage,
      link: 'https://github.com/GabrielBortolote/Tic-Tac-Toe',
    }
  ];

  const [selected, setSelected] = useState(0);

  return <>
    <div className='
      font-yellowtail
      text-6xl sm:text-8xl lg:text-6xl 2xl:text-8xl
      text-right
      py-8 2xl:py-16
    '>
      {dict.whatIveDone}
    </div>
    {items.map((item, index) => (
      <>
        <Divisor index={index}/>
        <PortfolioItem  
          isSelected={index==selected}
          onClick={() => {
            setSelected(index)
          }}
          dict={dict}
          title={item.title}
          description={item.description}
          link={item.link}
          image={item.image}
        />
      </>
    ))}
  </>
}

function Divisor({index}){
  if (index != 0){
    return <div className='
      flex flex-row
      justify-end
      w-full lg:w-3/4
      h-[1px]
      rounded
      bg-gradient-to-l from-light to-transparent
    '>
      <div className='
        h-full
        -translate-y-1/2
        rounded-full
        bg-light
      '/>
    </div>
  }
  else{
    return <></>
  }
}