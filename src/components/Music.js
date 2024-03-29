import React from 'react'
import Img from './image'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: block;
`

const Card = styled.div`
  border-bottom: 1px solid black;
  &:last-of-type {
    border-bottom: none;
  }
`

const Content = styled.div`
  display: grid;
  margin: 4rem 0;
  grid-template-columns: minmax(400px, 2fr) 4fr;

  @media (max-width: 868px) {
    grid-template-columns: 1fr;
    margin-bottom: 2rem;
  }
  grid-gap: 2rem;
`

const Image = styled.div`
  width: 100%;
`

const Text = styled.div`
  @media only screen and (min-width: 869px) {
    display: block;
    position: relative;
  }
  @media only screen and (max-width: 868px) {
    display: grid;
    grid-template-rows: 1fr 1fr;
  }
`

const Links = styled.div`
  @media only screen and (min-width: 869px) {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  justify-self: end;
  align-self: end;
  display: flex;
  text-align: right;
`

const Title = styled.div`
  h3 {
    @media only screen and (max-width: 1600px) {
      font-size: 5vw;
      line-height: 1;
    }
    @media only screen and (max-width: 868px) {
      letter-spacing: 0.15rem;
    }
  }
`

const ListenLink = styled.h5`
  line-height: 1;
  @media only screen and (max-width: 1600px) {
    font-size: 4.5vw;
    line-height: 1;
  }
  &:hover {
    text-decoration: underline;
  }
`

const BuyLink = styled(Link)`
  h5 {
    margin-right: 3.5rem;
    line-height: 1;
    @media only screen and (max-width: 1600px) {
      font-size: 4.5vw;
      line-height: 1;
    }
    &:hover {
      text-decoration: underline;
    }
  }
`

const Music = ({ data }) => {
  const albums = data.allAirtable.edges
    .sort((a, b) => a.node.data.Order - b.node.data.Order)
    .map((album) => {
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
                <BuyLink to="/shop">
                  <h5>Buy</h5>
                </BuyLink>
                <ListenLink>
                  <a href={data.Listen} target="_blank" rel="noreferrer">
                    Listen
                  </a>
                </ListenLink>
              </Links>
            </Text>
          </Content>
        </Card>
      )
    })
  return <Wrapper>{albums}</Wrapper>
}

export default Music
