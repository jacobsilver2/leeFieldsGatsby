import React from "react"
import Img from "./image"
// import useWindowSize from "../hooks/useWindowSize"
// import { Title } from "../styles/StyledShowsComponent"
import styled from "styled-components"
// import LargeBodyText from "../styles/LargeBodyText"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Card = styled.div`
  border-bottom: 1px solid black;
  &:last-of-type {
    border-bottom: none;
  }
`

const Content = styled.div`
  margin: 4rem 0;
  grid-template-columns: 1fr 2fr;
  display: grid;
  grid-gap: 2rem;
`

const Image = styled.div``

const Text = styled.div`
  position: relative;
`

const Title = styled.div``

const Links = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
`

const Link = styled.p`
  font-size: 4.5rem;
  &:hover {
    text-decoration: underline;
  }
`

const Music = ({ data }) => {
  // const size = useWindowSize()
  // console.log(data)
  const albums = data.allAirtable.edges
    .sort((a, b) => a.node.data.Order - b.node.data.Order)
    .map(album => {
      const { data, id } = album.node
      return (
        <Card key={id}>
          <Content>
            <Image>
              <Img image={data.Image.localFiles[0]} />
            </Image>
            <Text>
              <Title>
                <h3>{data.Record.toUpperCase()}</h3>
                <h3>({data.Year})</h3>
              </Title>
              <Links>
                <Link style={{ marginRight: "1.5rem" }}>
                  <a href={data.Buy}>Buy</a>
                </Link>
                <Link>
                  <a href={data.Listen}>Listen</a>
                </Link>
              </Links>
            </Text>
          </Content>
        </Card>
      )
    })
  return <Wrapper>{albums}</Wrapper>
}

export default Music
