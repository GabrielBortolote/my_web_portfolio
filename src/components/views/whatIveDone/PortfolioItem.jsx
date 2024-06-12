import Image from 'next/image'
import LinkImage from '@/static/Link.svg'

export default function PortfolioItem({dict, isSelected, onClick, title, description, link, image}){
  if(isSelected){
    return <div className="
      flex flex-row self-end
      justify-end
      py-4 sm:py-8
    ">
      <div className="
        flex flex-col
        justify-center items-end
        pr-4 sm:pr-8
        lg:w-96
      ">
        <Title className="tracking-wider font-bold pb-4">
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
    text-lg sm:text-2xl lg:text-xl 2xl:text-2xl
    text-right
    ${className}
  `}>
    {children}
  </h3>
}

function Description({children}){
  return <p className="
    text-md sm:text-xl lg:text-md 2xl:text-xl
    text-right
  ">
    {children}
  </p>
}

function Preview({src, alt, url}){
  return <a href={url} className="
    justify-self-center
    self-center
    border-softYellow
    border-[1px] border-dashed
    rounded-full
  ">
    <Image
      src={src}
      alt={alt}
      className='w-48 lg:w-48'
    />
  </a>
}

function Link({children, url}){
  return <a href={url} className='
    flex flex-row
    text-softYellow font-bold
    text-md
    pt-4
  '>
    <div className='
      w-6 h-6
      mr-2
    '>
      <Image src={LinkImage} alt="Follow the link" />
    </div>
    {children}
  </a>
}