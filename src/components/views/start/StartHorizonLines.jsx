import {HorizontalLine, DiagonalLine} from "./Lines"
import { degrees_to_radians } from "@/components/views/Utils";


function makeHorizontalLines(numberOfLines) {
  let horizontalLines = [];
  const topStep = 100/(numberOfLines + 1);

  horizontalLines.push({
    key: 0,
    top: 0,
  });

  horizontalLines.push({
    key: 1,
    top: 100,
  });

  for (let x = 0; x < numberOfLines; x++) {
    horizontalLines.push({
      key: x+1,
      top: topStep*(x+1),
    });
  }

  return horizontalLines;
}

function makeDiagonalLines(numberOfLines, containerHeight, maxPerspective=45) {
  let diagonalLines = [];
  const leftStep = 100/(numberOfLines+1);
  
  for (let x = 0; x < numberOfLines; x++) {
    const leftValue = leftStep*(x+1);
    const rotate = degrees_to_radians((maxPerspective/50)*leftValue-maxPerspective);
    const height = Math.abs(containerHeight/Math.cos(rotate));
    const xTranslation = Math.sin(rotate)*(height/2);
    const top = -(height-containerHeight)/2

    diagonalLines.push({
      key: x+1,
      left: leftValue,
      top: top,
      rotate: -rotate,
      height: height,
      xTranslation: xTranslation,
    });
  }

  return diagonalLines;
}

export default function StartHorizonLines({
  color, numberOfHorizontalLines, numberOfDiagonalLines,
  thickness=2, height=250, maxPerspectiveDegree=85
}) {
  const horizontalLines = makeHorizontalLines(numberOfHorizontalLines)
  const diagonalLines = makeDiagonalLines(numberOfDiagonalLines, height, maxPerspectiveDegree)

  return <>
    <div
      className="absolute inset-x-0"
      style={{
        height: `${height}px`,
        zIndex: 20,
        bottom: thickness+2
      }}
    >

      <div className="
        w-full h-full
        bg-gradient-to-t from-neonPink to-transparent
        opacity-50
      "></div>

      {horizontalLines.map(({key, top}) => (
        <HorizontalLine
          key={key}
          color={color}
          width="100%"
          thickness={thickness}
          top={top}
          left={0}
        />
      ))}

      {diagonalLines.map(({key, left, top, rotate, height, xTranslation}) => (
        <DiagonalLine
          key={key}
          color={color}
          height={height}
          thickness={thickness}
          left={left}
          top={top}
          rotate={rotate}
          xTranslation={xTranslation}
        />
      ))}
    </div>
  </>
}