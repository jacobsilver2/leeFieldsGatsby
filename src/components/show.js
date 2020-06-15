import React from "react"
import styled from "styled-components"
import moment from "moment"
import React from "react"

const StyledShow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  font-size: ${({ theme }) => theme.fontSize["6xl"]};
  align-items: center;
  /* justify-items: center; */
`

const BuyLink = styled.div`
  text-align: right;
  a {
    /* text-decoration: underline; */
  }
`

const Show = ({ show }) => {
  return (
    <StyledShow>
      <div>{moment(show.Date).format("MMM DD")}</div>
      <div>{show.Venue}</div>
      <div>{show.Location}</div>
      <BuyLink>
        <a href={show.URL}>Buy ➡️</a>
      </BuyLink>
    </StyledShow>
  )
}

export default Show
