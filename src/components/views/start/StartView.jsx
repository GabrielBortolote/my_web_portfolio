import { theme } from "@/../tailwind.config"
import ASkyFullOfStars from "@/components/visualEffects/ASkyFullOfStars"
import EchoTextEffect from "@/components/textEffects/Echo"
import GradientLayer from "@/components/visualEffects/GradientLayer"
import NeonFlickAndPulseEffect from "@/components/textEffects/neon/NeonFlickAndPulseEffect"
import StartHorizonLines from "./StartHorizonLines"
import SubTitle from "@/components/textEffects/SubTitle"
import Title from "@/components/textEffects/Title"
import TitleTag from "@/components/textEffects/TitleTag"

export default function StartView({ }) {
  return <div className={`
    w-full
    h-screen
    overflow-hidden
    text-light
    flex
    justify-center
    relative
  `}>
    <ASkyFullOfStars />
    <GradientLayer />
    <div className='text-center z-20 relative top-[33%]'>
      <SubTitle>
        Gabriel Bortolote
      </SubTitle>
      <Title>
        <TitleTag>
          <NeonFlickAndPulseEffect neonColor={theme.extend.colors.neonPink}>
            Pro
          </NeonFlickAndPulseEffect>
        </TitleTag>
        <EchoTextEffect color='#fd6155'>
          Software Engineer
        </EchoTextEffect>
      </Title>
    </div>
    <StartHorizonLines
      thickness={2}
      numberOfHorizontalLines={8}
      numberOfDiagonalLines={15}
      color={theme.extend.colors.neonPink}
    />
  </div>
}
