export default function EchoTextEffect({children, color}){
  return <>
    <span className="relative w-full z-0">
      {children}
      <span className={`absolute left-1 top-1 w-full -z-10`} style={{
        color: color,
        opacity: '50%',
      }}>
        {children}
      </span>
      <span className={`absolute left-2 top-2 w-full -z-20`} style={{
        color: color,
        opacity: '25%',
      }}>
        {children}
      </span>
    </span>
  </>
}
