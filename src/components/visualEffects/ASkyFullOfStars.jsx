import Sprinkles from "./Sprinkles"
import Star from "./Star"

export default function ASkyFullOfStars() {
  return <div className="absolute w-full h-full left-0 top-0 z-0">
    <Sprinkles
      granularity={400}
      minDelay={0}
      maxDelay={20}
      minDuration={5}
      maxDuration={15}
    >
      <Star />
    </Sprinkles>
  </div>
}