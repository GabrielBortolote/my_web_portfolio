import styled, {keyframes} from "styled-components"
import {IntenseGlowTextShadow} from "./TextShadows"

const flickKeyFrames = (lightFrames, darkFrames, color) => keyframes`
  ${lightFrames} {
    text-shadow: ${IntenseGlowTextShadow(color)};
  }
  ${darkFrames} {
    text-shadow: none;
  }
`

const FlickTextAnimation = styled.span`
  animation: 
    ${props => flickKeyFrames(props.$lightFrames, props.$darkFrames, props.$color)}
    ${props => props.$duration}s linear 1;
`

export default FlickTextAnimation 