import Sprinkles from "./Sprinkles"
import Star from "./Star"

export default function ASkyFullOfStars({granularity=400}) {
  return <div id="stars" className="absolute w-full h-full left-0 top-0 -z-20">
    <Sprinkles
      granularity={granularity}
      minDelay={0}
      maxDelay={20}
      minDuration={5}
      maxDuration={15}
    >
      <Star />
    </Sprinkles>
  </div>
}