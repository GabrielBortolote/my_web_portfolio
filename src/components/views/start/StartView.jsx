import { theme } from "@/../tailwind.config"
import ASkyFullOfStars from "@/components/visualEffects/ASkyFullOfStars"
import EchoTextEffect from "@/components/textEffects/Echo"
import GradientLayer from "@/components/visualEffects/GradientLayer"
import NeonFlickAndPulseEffect from "@/components/textEffects/neon/NeonFlickAndPulseEffect"
import StartHorizonLines from "./StartHorizonLines"
import TitleTag from "@/components/textEffects/TitleTag"

export default function StartView({ }) {
  const titleTag = <TitleTag>
    <NeonFlickAndPulseEffect neonColor={theme.extend.colors.neonPink}>
      Pro
    </NeonFlickAndPulseEffect>
  </TitleTag>


  return <div className={`
    w-full
    h-screen
    overflow-hidden
    text-light
    flex flex-row justify-center
    relative
  `}>
    <div className="flex flex-col justify-end">
      <div className="relative bottom-2/4 text-center">
        <h3 className="font-bold text-2xl md:text-4xl">
          Gabriel Bortolote
        </h3>
        <div className="
          relative
          pt-1 md:pt-2
          font-kagitingan text-6xl sm:text-8xl uppercase text-softYellow
        ">
          <EchoTextEffect color='#fd6155' tag={titleTag}>
            Software <br className="min-[1150px]:hidden"/> Engineer
          </EchoTextEffect>
        </div>
      </div>
    </div>
    <StartHorizonLines
      thickness={2}
      numberOfHorizontalLines={8}
      numberOfDiagonalLines={15}
      color={theme.extend.colors.neonPink}
    />
    <ASkyFullOfStars />
    <GradientLayer />
  </div>
}
