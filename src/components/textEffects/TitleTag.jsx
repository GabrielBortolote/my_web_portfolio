export default function TittleTag({children}){
  return <span className="
    z-10 absolute 
    text-lg xs:text-2xl md:text-4xl xl:text-6xl
    right-[100%] md:right-[100%]
    -top-[10%] lg:-top-[20%]
    font-yellowtail text-neonPink
  ">
    {children}
  </span>
}