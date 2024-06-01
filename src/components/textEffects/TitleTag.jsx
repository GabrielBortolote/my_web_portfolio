export default function TittleTag({children}){
  return <span className="
    z-10 absolute 
    text-2xl md:text-6xl
    right-[100%] md:right-[100%]
    top-0 md:-top-6
    font-yellowtail text-neonPink
  ">
    {children}
  </span>
}