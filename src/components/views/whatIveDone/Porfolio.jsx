'use client'

import { useState } from 'react'
import Image from 'next/image'
import ModernBankApp from '@/static/ModernBankApp.svg'
import DataPipeline from '@/static/DataPipeline.svg'
import MensClothesStore from '@/static/MensClothesStore.svg'
import TicTacToeImage from '@/static/TicTacToeImage.svg'
import LinkImage from '@/static/Link.svg'

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
      text-6xl 2xl:text-8xl
      text-right
      py-8 2xl:py-16
    '>
      {dict.whatIveDone}
    </div>
    {items.map((item, index) => (
      <>
        <Divisor index={index}/>
        <Item
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

function Item({dict, isSelected, onClick, title, description, link, image}){
  if(isSelected){
    return <div className="
      flex flex-row self-end
      justify-end
      py-8
    ">
      <div className="
        flex flex-col
        justify-center items-end
        pr-8
        w-52 2xl:w-96
      ">
        <Title className="tracking-wider font-bold">
          {title}
        </Title>
        <Description>
          {description}
        </Description>
        <Link url={link}>
          {dict.preview}
        </Link>
      </div>
      <Preview src={image} alt={title} url={link}/>
    </div>
  }
  else{
    return <div onClick={onClick} className="
      flex flex-row
      justify-end
      cursor-pointer
      py-8
    ">
      <Title className="tracking-widest">
        {title}
      </Title>
    </div>
  }
}

function Title({children, className}){
  return <h3 className={`
    text-xl 2xl:text-2xl
    pb-4
    text-right
    ${className}
  `}>
    {children}
  </h3>
}

function Description({children}){
  return <p className="
    text-md 2xl:text-xl
    text-right
  ">
    {children}
  </p>
}

function Preview({src, alt, url}){
  return <a href={url} className="
    justify-self-center
    self-center
    w-36 2xl:w-48
    h-36 2xl:h-48
    border-softYellow
    border-[1px] border-dashed
    rounded-full
  ">
    <Image
      src={src}
      alt={alt}
    />
  </a>
}

function Link({children, url}){
  return <a href={url} className='
    flex flex-row
    text-softYellow font-bold
    text-sm 2xl:text-md
    pt-4
  '>
    <div className='
      w-4 2xl:w-6
      h-4 2xl:h-6
      mr-2
    '>
      <Image src={LinkImage} alt="Follow the link" />
    </div>
    {children}
  </a>
}

function Divisor({index}){
  if (index != 0){
    return <div className='
      flex flex-row
      justify-end
      w-full h-[2px]
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