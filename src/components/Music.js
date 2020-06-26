import React from "react"
import Img from "./image"
// import useWindowSize from "../hooks/useWindowSize"
// import { Title } from "../styles/StyledShowsComponent"
// import styled from "styled-components"
import LargeBodyText from "../styles/LargeBodyText"

const Music = ({ data }) => {
  // const size = useWindowSize()
  // console.log(data)
  const albums = data.allAirtable.edges
    .sort((a, b) => a.node.data.Order - b.node.data.Order)
    .map(album => {
      const { data, id } = album.node
      return (
        <div key={id}>
          <Img image={data.Image.localFiles[0]} />
          <h4>{data.Record}</h4>
          <LargeBodyText>
            <a href={data.Buy}>Buy</a>
          </LargeBodyText>
          <LargeBodyText>
            <a href={data.Listen}>Listen</a>
          </LargeBodyText>
        </div>
      )
    })
  return <div>{albums}</div>
}

export default Music
