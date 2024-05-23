import ViewWrapper from "@/components/ViewWrapper";

export default function StartView({ }) {
  return <>
    <ViewWrapper className='flex items-center justify-center'>
      <BigTittle />
    </ViewWrapper>
  </>
}

function BigTittle({}) {
  return <div className='text-center'>
    <SubTittle>
      Gabriel Bortolote
    </SubTittle>
    <Tittle>
      <TittleTag>
        Pro
      </TittleTag>
      <EchoTextEffect>
        Software Engineer
      </EchoTextEffect>
    </Tittle>
  </div>
}

function SubTittle({children}){
  return <h3 className="font-bold text-4xl">
    {children}
  </h3>
}

function Tittle({children}){
  return <h1 className="mt-2 relative font-kagitingan text-8xl uppercase text-soft-yellow">
    {children}
  </h1>
}

function TittleTag({children}){
  return <span className="text-6xl z-10 absolute right-[100%] -top-6 font-yellowtail text-neon-pink">
    {children}
  </span>
}

function EchoTextEffect({children}){
  return <>
    <span className="relative w-full z-0">
      {children}
      <span className="absolute left-1 top-1 w-full -z-10 text-[#FD6155]/50">
        {children}
      </span>
      <span className="absolute left-2 top-2 w-full -z-20 text-[#FD6155]/25">
        {children}
      </span>
    </span>
  </>
}