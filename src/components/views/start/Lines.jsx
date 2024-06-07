const lineShadowEffect = ({color}) => `
  0px 0px 1px #ffffff,
  0px 0px 10px ${color}
`

export function HorizontalLine({color, width, thickness, top, left}) {
  return <div 
  style = {{
    position: 'absolute',
    backgroundColor: color,
    boxShadow: lineShadowEffect({color}),
    width: width,
    height: `${thickness}px`,
    left: left,
    top: `${top}%`,
  }} />
}


export function DiagonalLine({
  color, height, thickness, top, left, rotate, xTranslation
}){
  return <div 
  style = {{
    position: 'absolute ',
    backgroundColor: color,
    boxShadow: lineShadowEffect({color}),
    height: `${height}px`,
    width: `${thickness}px`,
    left: `${left}%`,
    top: top,
    transform: `translateX(${xTranslation}px) rotate(${rotate}rad)`,
  }} />
}