import React from "react"
import Img from "./image"
import LargeBodyText from "../styles/LargeBodyText"
import styled from "styled-components"

const Text = styled.div`
  width: 100%;
  margin-top: 6rem;
  margin-bottom: 15rem;
`

const Headline = styled.div`
  width: 85%;
  padding-bottom: 4rem;
`

const Info = styled.div`
  width: 60%;
`

const About = ({ data }) => {
  const aboutInfo = data.edges[0].node

  return (
    <div>
      <Img image={aboutInfo.data.AboutPic.localFiles[0]} />
      <Text>
        <Headline>
          <LargeBodyText>{aboutInfo.data.Headline}</LargeBodyText>
        </Headline>
        <Info>
          <p>{aboutInfo.data.P1}</p>
          <p>{aboutInfo.data.P2}</p>
          <p>{aboutInfo.data.P3}</p>
        </Info>
      </Text>
    </div>
  )
}

export default About
