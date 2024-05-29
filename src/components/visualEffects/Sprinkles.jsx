import {getRandomInt} from './Utils'

function SprinkleAtom ({
  children, minDelay=0, maxDelay=30, minDuration=10, maxDuration=15
}) {
  const top = getRandomInt(0, 100);
  const left = getRandomInt(0, 100);
  const delay = getRandomInt(minDelay, maxDelay);
  const duration = getRandomInt(minDuration, maxDuration);

  return <div
    style={{
      opacity: 0,
      position: 'absolute',
      top: `${top}%`,
      left: `${left}%`,
      animation: `fadeInOut`,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
      animationIterationCount: 'infinite',
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