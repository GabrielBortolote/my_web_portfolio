import styled, {keyframes} from "styled-components"
import {IntenseGlowTextShadow, GlowTextShadow} from "./TextShadows"

const pulseGlowKeyFrames = (color) => keyframes`
  0% {
    text-shadow: ${IntenseGlowTextShadow(color)};
  }
  100% {
    text-shadow: ${GlowTextShadow(color)};
  }
`

const PulseGlowAnimation = styled.span`
  animation: ${props => pulseGlowKeyFrames(props.$color)} 2s infinite alternate;
`

export default PulseGlowAnimation