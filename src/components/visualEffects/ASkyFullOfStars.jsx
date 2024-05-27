import Sprinkles from "./Sprinkles"
import Star from "./Star"

export default function ASkyFullOfStars({children}) {
  return <div className="absolute w-full h-full left-0 top-0 z-0">
    <Sprinkles granularity={300}>
      <Star />
    </Sprinkles>
  </div>
}