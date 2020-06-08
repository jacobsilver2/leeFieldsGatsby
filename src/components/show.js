import React from "react"
import styled from "styled-components"
import moment from "moment"

const StyledShow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  font-size: ${({ theme }) => theme.fontSize["6xl"]};
`

const Show = ({ show }) => {
  return (
    <StyledShow>
      <div>{moment(show.Date).format("MM/DD")}</div>
      <div>{show.Venue}</div>
      <div>{show.Location}</div>
    </StyledShow>
  )
}

export default Show
