import React from "react"
import Img from "./image"
import LargeBodyText from "../styles/LargeBodyText"
import styled from "styled-components"
import FadeWrapper from "./FadeWrapper"

const Wrapper = styled.div`
  @media only screen and (max-width: 828px) {
    margin: 0;
  }
`

const Text = styled.div`
  width: 100%;
  margin-top: 6rem;
  margin-bottom: 15rem;
  @media only screen and (max-width: 828px) {
    margin-top: 2rem;
    margin-bottom: 10rem;
  }
`

const Headline = styled.div`
  @media only screen and (max-width: 828px) {
    width: 100%;
  }
  width: 85%;
  padding-bottom: 4rem;
`

const Info = styled.div`
  width: 65%;
  @media only screen and (max-width: 828px) {
    width: 100%;
  }
`

const LargeBody = styled(LargeBodyText)`
  letter-spacing: -0.2rem;
  @media only screen and (max-width: 828px) {
    font-size: 12vw;
    line-height: 1;
  }
`

const AboutText = styled.p`
  font-weight: 400;
  @media only screen and (min-width: 829px) {
    letter-spacing: 0.1rem;
  }
`

const BoldAboutText = styled.p`
  font-weight: 600;
  @media only screen and (min-width: 829px) {
    letter-spacing: 0.1rem;
  }
`

const About = ({ data }) => {
  const aboutInfo = data.edges[0].node

  return (
    <FadeWrapper>
      <Wrapper>
        <Img image={aboutInfo.data.AboutPic.localFiles[0]} />
        <Text>
          <Headline>
            <LargeBody>{aboutInfo.data.Headline}</LargeBody>
          </Headline>
          <Info>
            <AboutText>{aboutInfo.data.P1}</AboutText>
            <br />
            <br />
            <AboutText>{aboutInfo.data.P2}</AboutText>
            <br />
            <br />
            <AboutText>{aboutInfo.data.P3}</AboutText>
            <br />
            <br />
            <AboutText>{aboutInfo.data.P4}</AboutText>
            <br />
            <br />
            <BoldAboutText>{aboutInfo.data.P5}</BoldAboutText>
            <br />
            <br />
            <BoldAboutText>{aboutInfo.data.P6}</BoldAboutText>
          </Info>
        </Text>
      </Wrapper>
    </FadeWrapper>
  )
}

export default About
