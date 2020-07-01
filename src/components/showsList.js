import React from "react"
import Show from "./show"
import styled from "styled-components"

const ShowsListContainer = styled.div`
  display: block;
  margin-top: 8vw;
  /* border-bottom: 1px solid black; */
`

const ShowsList = ({ shows }) => {
  return (
    <ShowsListContainer>
      {shows.map(show => (
        <Show key={show.id} show={show} />
      ))}
    </ShowsListContainer>
  )
}

export default ShowsList
