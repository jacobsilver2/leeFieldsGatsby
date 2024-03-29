import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

const ImageContainer = styled.div`
  object-fit: cover;
`


const PopupContent = () => {
  const data = useStaticQuery(graphql`
    query oneImageQuery {
      allAirtable(filter: { table: { eq: "Music" } }) {
        edges {
          node {
            data {
              Record
              Image {
                localFiles {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const sentimentalFoolImage = getImage(
    data.allAirtable.edges.filter(
      edge => edge.node.data.Record === "Sentimental Fool"
    )[0].node?.data?.Image.localFiles[0]
  )

  return (
    <>
      <a
        target="_blank"
        rel="noopener noreferrer"
        style={{ textAlign: "center" }}
        href="https://daptone.ffm.to/sentimentalfool.OWE"
      >
        <p>Sentimental Fool</p>
        <p>Out Now</p>
      </a>
      <a
        style={{ textAlign: "center" }}
        href="https://daptone.ffm.to/sentimentalfool.OWE"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ImageContainer>
          <GatsbyImage
            style={{height: '100%', width: '100%'}}
            objectFit="contain"
            alt="sentimentalFoolAlbumCover"
            image={sentimentalFoolImage}
          />
        </ImageContainer>
      </a>
    </>
  )
}

export default PopupContent
