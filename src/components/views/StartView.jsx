import ViewWrapper from "@/components/views/ViewWrapper"
import NeonFlickAndPulseEffect from "@/components/textEffects/neon/NeonFlickAndPulseEffect"
import SubTitle from "@/components/textEffects/SubTitle"
import Title from "@/components/textEffects/Title"
import TitleTag from "@/components/textEffects/TitleTag"
import EchoTextEffect from "@/components/textEffects/Echo"
import ASkyFullOfStars from "@/components/visualEffects/ASkyFullOfStars"
import GradientLayer from "@/components/visualEffects/GradientLayer"
import { theme } from "@/../tailwind.config"

export default function StartView({ }) {
  return <>
      <ViewWrapper className='flex items-center justify-center relative'>
        <ASkyFullOfStars />
        <GradientLayer color="dark"/>
          <div className='text-center z-20'>
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
      </ViewWrapper>
  </>
}
