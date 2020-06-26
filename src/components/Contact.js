import React from "react"
import styled from "styled-components"

const ContactCard = styled.div`
  margin-bottom: 5rem;
`

const Contact = ({ data }) => {
  const mappedData = data.edges
    .sort((a, b) => a.node.data.Order - b.node.data.Order)
    .map(contact => {
      const { data, id } = contact.node
      return (
        <ContactCard key={id}>
          <h4>{data.Role.toUpperCase()}</h4>
          {data.Agency && <p>{data.Agency}</p>}
          {data.Name1 && (
            <p>
              <a href={`mailto: ${data.Email1}`}>{data.Name1}</a>
            </p>
          )}
          {data.Name2 && (
            <p>
              <a href={`mailto: ${data.Email2}`}>{data.Name2}</a>
            </p>
          )}
        </ContactCard>
      )
    })

  return <div>{mappedData}</div>
}

export default Contact
