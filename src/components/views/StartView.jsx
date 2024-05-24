import ViewWrapper from "@/components/views/ViewWrapper"
import NeonFlickAndPulseEffect from "@/components/textEffects/neon/NeonFlickAndPulseEffect"
import SubTitle from "@/components/textEffects/SubTitle"
import Title from "@/components/textEffects/Title"
import TitleTag from "@/components/textEffects/TitleTag"
import EchoTextEffect from "@/components/textEffects/Echo"

export default function StartView({ }) {
  return <>
    <ViewWrapper className='flex items-center justify-center'>
      <div className='text-center'>
        <SubTitle>
          Gabriel Bortolote
        </SubTitle>
        <Title>
          <TitleTag>
            <NeonFlickAndPulseEffect neonColor={'#EF529C'}>
              Pro
            </NeonFlickAndPulseEffect>
          </TitleTag>
          <EchoTextEffect color={'#fd6155'}>
            Software Engineer
          </EchoTextEffect>
        </Title>
      </div>
    </ViewWrapper>
  </>
}
