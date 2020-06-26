import React from "react"
import Img from "./image"
import LargeBodyText from "../styles/LargeBodyText"

const About = ({ data }) => {
  const aboutInfo = data.edges[0].node

  console.log(aboutInfo)

  return (
    <div>
      <Img image={aboutInfo.data.AboutPic.localFiles[0]} />
      <LargeBodyText>{aboutInfo.data.Headline}</LargeBodyText>
      <p>{aboutInfo.data.P1}</p>
      <p>{aboutInfo.data.P2}</p>
      <p>{aboutInfo.data.P3}</p>
    </div>
  )
}

export default About
