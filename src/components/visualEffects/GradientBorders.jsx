export default function GradientBorders({children, size, detail, detailSize}){
  return <div className="relative">
    {children}

    <div className={`
      absolute bottom-0
      w-full
      bg-gradient-to-r from-softYellow to-transparent
    `}
    style={{
      height: `${size}px`,
    }}/>

    <div className={`
      absolute bottom-0 left-0
      h-full
      bg-gradient-to-t from-softYellow to-transparent
    `}
    style={{
      width: `${size}px`,
    }}/>

    <div className={`
      absolute
      bottom-0 left-0
      -translate-x-1/2
      translate-y-1/2
    `}
    style={{
      width: `${detailSize}px`,
      height: `${detailSize}px`,
    }}>
      {detail}
    </div>
  </div>
}