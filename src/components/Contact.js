import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  margin-top: 10rem;
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
`

const Info = styled.p`
  /* line-height: 1; */
`

const Contact = ({ data }) => {
  const mappedData = data.edges
    .sort((a, b) => a.node.data.Order - b.node.data.Order)
    .map(contact => {
      const { data, id } = contact.node
      return (
        <ContactCard key={id}>
          <Title>{data.Role.toUpperCase()}</Title>
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
      )
    })

  return <Wrapper>{mappedData}</Wrapper>
}

export default Contact
