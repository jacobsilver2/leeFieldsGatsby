import React from "react"
import styled from "styled-components"
import FadeWrapper from "./FadeWrapper"
import useWindowSize from "../hooks/useWindowSize"

const Wrapper = styled.div`
  margin-top: 6rem;
  @media only screen and (max-width: 828px) {
    margin: 0;
  }
`

const ContactCard = styled.div`
  margin-bottom: 5rem;
  @media only screen and (max-width: 828px) {
    text-align: left;
  }
`

const Title = styled.h4`
  line-height: 1;
  padding-bottom: 1rem;
`
const TitleMobile = styled.h3`
  line-height: 1;
  padding-bottom: 1rem;
`

const Info = styled.p`
  font-weight: 400;
  a {
    font-weight: 400;
  }
  /* line-height: 1; */
`

const Contact = ({ data }) => {
  const size = useWindowSize()
  const mappedData = data.edges
    .sort((a, b) => a.node.data.Order - b.node.data.Order)
    .map(contact => {
      const { data, id } = contact.node
      return (
        <FadeWrapper key={id}>
          <ContactCard>
            {size.width >= 828
              ? data.Role && <Title>{data.Role.toUpperCase()}</Title>
              : data.Role && (
                  <TitleMobile>{data.Role.toUpperCase()}</TitleMobile>
                )}
            {data.Agency && <Info>{data.Agency}</Info>}
            {data.Name1 && (
              <Info>
                <a href={`mailto: ${data.Email1}`}>{data.Name1}</a>
              </Info>
            )}
            {data.Name2 && (
              <Info>
                <a href={`mailto: ${data.Email2}`}>{data.Name2}</a>
              </Info>
            )}
          </ContactCard>
        </FadeWrapper>
      )
    })

  return <Wrapper>{mappedData}</Wrapper>
}

export default Contact
