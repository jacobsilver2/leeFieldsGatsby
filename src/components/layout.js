import React, { useContext, useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GlobalDispatchContext, GlobalStateContext } from "../context/provider"
import Headroom from "react-headroom"
import Header from "./header"
import Footer from "./footer"
import Signup from "./Signup"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ContentContainer from "../styles/ContentContainer"
import styled from "styled-components"
import Modal from "./modal"
import VideoModalComponent from "./VideoModalComponent"
import VideoModalMobileComponent from "./VideoModalMobileComponent"
import useWindowSize from "../hooks/useWindowSize"
import { AnimatePresence } from "framer-motion"

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const StickyFooter = styled.div`
  display: ${({ videoModalOpen }) => (videoModalOpen ? "none" : "")};
  flex-shrink: 0;
`

const ImageContainer = styled.div`
  width: 100%;
  object-fit: cover;
`

const Layout = ({ children, location, ...props }) => {
  const modalRef = useRef()
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)
  const size = useWindowSize()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site: site {
        siteMetadata {
          title
        }
      }
      images: allAirtable(filter: { table: { eq: "Music" } }) {
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
    data.images.edges.filter(
      edge => edge.node.data.Record === "Sentimental Fool"
    )[0].node?.data?.Image.localFiles[0]
  )

  useEffect(() => {
    modalRef.current?.openModal()
  }, [])

  return (
    <>
      <Wrapper>
        <Modal ref={modalRef}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            style={{ textAlign: "center" }}
            href="https://daptone.ffm.to/sentimentalfool.OWE"
          >
            <p>Sentimental Fool</p>
            <p>Oct 28 • Pre-Order Now</p>
          </a>
          <a
            style={{ textAlign: "center" }}
            href="https://daptone.ffm.to/sentimentalfool.OWE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImageContainer>
              <GatsbyImage image={sentimentalFoolImage} />
            </ImageContainer>
          </a>
        </Modal>
        <AnimatePresence>
          {state.videoModalOpen && size.width >= 828 && <VideoModalComponent />}
          {state.videoModalOpen && size.width <= 828 && (
            <VideoModalMobileComponent />
          )}
        </AnimatePresence>
        <Headroom
          style={{ zIndex: "1000" }}
          onUnpin={() => dispatch({ type: "SECONDARY_MENU_OFF" })}
        >
          <Header siteTitle={data.site.siteMetadata.title} />
        </Headroom>
        <ContentContainer
          videoModalOpen={state.videoModalOpen}
          tickerOpen={state.tickerIsVisible}
        >
          {children}
        </ContentContainer>
        <StickyFooter videoModalOpen={state.videoModalOpen}>
          <Signup location={location} />
          <Footer />
        </StickyFooter>
      </Wrapper>
    </>
  )
}

export default Layout
