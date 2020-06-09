import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "./image"
import { Title } from "../styles/StyledShowsComponent"
import styled from "styled-components"

const Border = styled.div`
  border-right: 7.5px solid ${({ theme }) => theme.color.offWhite};
  border-left: 7.5px solid ${({ theme }) => theme.color.offWhite};
  /* border-left: 10px solid ${({ theme }) => theme.color.offWhite}; */
`

const Listen = () => {
  const data = useStaticQuery(graphql`
    query albumsQuery {
      albums: allFile(filter: { sourceInstanceName: { eq: "albums" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const { edges } = data.albums
  const settings = {
    autoplay: true,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <>
      <Title>Listen</Title>
      <Slider {...settings}>
        {edges.map(album => (
          <Border>
            <a href="http://www.spotify.com">
              <Img image={album.node} />
            </a>
          </Border>
        ))}
      </Slider>
    </>
  )
}

export default Listen
