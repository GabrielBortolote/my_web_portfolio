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
  ]

  return <div className="">
    <div className='
      font-yellowtail text-8xl text-center
      pb-16
    '>
      {dict.whatIveDone}
    </div>
    {items.map((item, count) => (
      <Item key={count}>
        <div className="
          flex flex-col
          justify-center items-end
          pr-8
          pb-8
          w-2/4
        ">
          <Title>
            {item.title}
          </Title>
          <Description>
            {item.description}
          </Description>
          <Link url={item.link}>
            {dict.preview}
          </Link>
        </div>
        <Preview src={item.image} alt={item.title} />
      </Item>
    ))}
  </div>
}

function Item({children}){
  return <div className="
    flex flex-row
    justify-end
    pb-16
  ">
    {children}
  </div>
}

function Title({children}){
  return <h3 className="
    text-2xl
    font-bold
    pb-4
    text-right
  ">
    {children}
  </h3>
}

function Description({children}){
  return <p className="
    text-xl
    text-right
  ">
    {children}
  </p>
}

function Preview({src, alt}){
  return <div className="
    justify-self-center
    self-center
    w-48 h-48
    border-softYellow
    border-[1px] border-dashed
    rounded-full
  ">
    <Image
      src={src}
      alt={alt}
    />
  </div>
}

function Link({children, url}){
  return <a href={url} className='
    flex flex-row
    text-softYellow font-bold
    pt-4
  '>
    <div className='w-6 h-6 mr-2'>
      <Image src={LinkImage} alt="Follow the link" />
    </div>
    {children}
  </a>
}
