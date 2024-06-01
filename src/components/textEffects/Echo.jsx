export default function EchoTextEffect({children, color, tag}){
  return <span className="relative">
    {tag}
    {children}
    <span
      className={`absolute top-0 left-0 opacity-50 translate-x-1 translate-y-1 -z-10`}
      style={{color: color}}
    >
      {children}
    </span>
    <span
      className={`absolute top-0 left-0 opacity-25 translate-x-2 translate-y-2 -z-10`}
      style={{color: color}}
    >
      {children}
    </span>
  </span>
}
