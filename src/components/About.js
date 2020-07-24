import React from "react"
import Img from "./image"
import LargeBodyText from "../styles/LargeBodyText"
import styled from "styled-components"

// adding comment, trying to figure out why it's not deploying from git add.

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
  @media only screen and (max-width: 828px) {
    font-size: 12vw;
    line-height: 1;
  }
`

const AboutText = styled.p`
  font-weight: 300;
`

const About = ({ data }) => {
  const aboutInfo = data.edges[0].node

  return (
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
        </Info>
      </Text>
    </Wrapper>
  )
}

export default About
