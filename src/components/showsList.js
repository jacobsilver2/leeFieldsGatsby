import React from "react"
import Show from "./show"
import styled from "styled-components"

const ShowsListContainer = styled.div`
  display: block;
  margin-top: 8vw;
  /* border-bottom: 1px solid black; */
`
const NoShows = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ShowsList = ({ shows }) => {
  console.log(shows)
  return (
    <ShowsListContainer>
      {shows.length != 0 ? (
        shows.map(show => <Show key={show.id} show={show} />)
      ) : (
        <NoShows>
          <h5>There are no upcoming shows</h5>
        </NoShows>
      )}
    </ShowsListContainer>
  )
}

export default ShowsList
