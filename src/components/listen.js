import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "./image"
import useWindowSize from "../hooks/useWindowSize"
import { Title } from "../styles/StyledShowsComponent"
import styled from "styled-components"
// import { theme } from "../styles/theme"

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
      }}
      onClick={onClick}
    />
  )
}

const StyledSlider = styled(Slider)`
  .slick-slide {
    /* margin-right: 1px;
    margin-left: 1px; */
    padding: 0 1rem;
  }
  .slick-next {
    right: 25px;
  }
  .slick-prev {
    /* left: -100px; */
  }

  /* .slick-slide.slick-active:first-child,
  .slick-slide.slick-active:last-child {
    margin: 0;
  } */
`

const Listen = () => {
  const size = useWindowSize()
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

  const slidesIWannaShow = () => {
    let slides
    if (size.width >= 1300) {
      slides = 4
    }
    if (size.width < 1300 && size.width >= 576) {
      slides = 2
    }
    if (size.width < 576) {
      slides = 1
    }
    return slides
  }

  const settings = {
    autoplay: true,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesIWannaShow(),
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <>
      <Title>Listen</Title>
      <StyledSlider {...settings}>
        {edges.map((album, i) => (
          <a key={i} href="http://www.spotify.com">
            <Img image={album.node} />
          </a>
        ))}
      </StyledSlider>
    </>
  )
}

export default Listen
