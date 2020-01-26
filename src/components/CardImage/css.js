import styled from "styled-components"
import { breakpoints } from "../../theme/constants"
import { H2 } from "../../theme/typography"
import { colors } from "../../theme/constants"

const { white } = colors

const CardSection = styled.section`
  background-color: ${white};
  position: relative;
  display: flex;

  @media screen and (min-width: ${breakpoints.tablet}px) {
    padding: 5rem 1.25rem 8rem 1.25rem;
  }
`

const CardPhoto = styled.img`
  @media (min-width: 850px) {
    height: 550px;
    width: 850px;
    position: absolute;
  }

  @media (max-width: 849px) {
    height: 100%;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`

const CardTextSection = styled.div`
  @media (min-width: 1025px) {
    background-color: ${white};
    position: relative;
    height: 500px;
    width: 700px;
    margin-left: 32rem;
    margin-right: 6.25rem;
    transform: translateY(1.5rem);
    padding: 3rem;
  }

  @media (min-width: 850px) and (max-width: 1024px) {
    background-color: ${white};
    position: relative;
    height: 500px;
    width: 700px;
    margin-left: 13rem;
    padding: 1rem;
    transform: translateY(1.5rem);
  }

  @media (max-width: 849px) {
    background: rgba(255, 255, 255, 0.75);
    padding: 3rem 0.5rem;
    text-align: center;
  }
`

const CardH2 = styled(H2)`
  margin-top: 0;
`

const CardP = styled.p`
  line-height: 2rem;
`

const Wrapper = styled.div`
  margin: auto;
`
export { CardSection, CardPhoto, CardTextSection, CardH2, CardP, Wrapper }
