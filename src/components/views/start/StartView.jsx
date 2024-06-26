import { theme } from "@/../tailwind.config"
import ASkyFullOfStars from "@/components/visualEffects/ASkyFullOfStars"
import EchoTextEffect from "@/components/textEffects/Echo"
import GradientLayer from "@/components/visualEffects/GradientLayer"
import NeonFlickAndPulseEffect from "@/components/textEffects/neon/NeonFlickAndPulseEffect"
import StartHorizonLines from "./StartHorizonLines"
import TitleTag from "@/components/textEffects/TitleTag"

export default function StartView({dict}) {
  const titleTag = <TitleTag>
    <NeonFlickAndPulseEffect neonColor={theme.extend.colors.neonPink}>
      Pro
    </NeonFlickAndPulseEffect>
  </TitleTag>

  return <div className="relative w-full">
    <div className={`
      w-full
      h-screen
      overflow-hidden
      text-light
      flex flex-row justify-center
      relative
    `}>
      <GradientLayer />
      <div className="flex flex-col justify-end">
        <div className="relative bottom-2/4 text-center">
          <h3 className="
            tracking-widest
            text-sm xs:text-lg sm:text-2xl lg:text-4xl
          ">
            GABRIEL BORTOLOTE
          </h3>
          <div className="
            relative
            pt-1 md:pt-2
            font-kagitingan
            text-4xl xs:text-6xl sm:text-8xl
            uppercase text-softYellow
          ">
            <EchoTextEffect color='#fd6155' tag={titleTag}>
              {dict.roleStart} <br className="block lg:hidden"/> {dict.roleEnd}
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
    </div>
    <div className="
      absolute
      -bottom-4
      w-full h-5
      bg-gradient-to-b from-neonPink to-transparent
      opacity-50
    "/>
  </div>
}
