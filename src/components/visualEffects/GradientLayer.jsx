export default function ASkyFullOfStars({color}) {
  return <div className={`
    absolute
    w-full
    h-full
    left-0
    top-0
    bg-gradient-to-b
    from-${color}
    to-transparent
    z-10
  `}></div>
}