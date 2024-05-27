import {gentRandomInt} from './Utils'

function SprinkleAtom ({children}) {
  const top = gentRandomInt({max: 100})
  const left = gentRandomInt({max: 100})
  const delay = gentRandomInt(5, 40)

  return <div
  className={'animate-fadeInOut'}
    style={{
      opacity: 0,
      position: 'absolute',
      top: `${top}%`,
      left: `${left}%`,
      animationDelay: `${delay}s`,
    }}
  >
    {children}
  </div>
}

export default function Sprinkles({ children, granularity = 10 }) {
  const keys = [...Array(granularity).keys()];
  return (
    <>
      {keys.map((n) => (
        <SprinkleAtom key={n}>{children}</SprinkleAtom>
      ))}
    </>
  );
}