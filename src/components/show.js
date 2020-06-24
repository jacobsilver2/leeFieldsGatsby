import React from "react"
import styled from "styled-components"
import moment from "moment"
import LargeBodyText from "../styles/LargeBodyText"

const StyledShow = styled.div`
  display: grid;
  grid-template-columns: 0.75fr 3fr 3fr 0.75fr;
  align-items: center;
  /* grid-gap: 20px; */
  /* justify-items: center; */
`

const BuyLink = styled.div`
  text-align: right;
  a {
    &:hover {
      text-decoration: underline;
    }
  }
`

const Show = ({ show }) => {
  return (
    <StyledShow>
      <div>
        <h4>{moment(show.Date).format("MMM DD")}</h4>
      </div>
      <div>
        <h4>{show.Venue}</h4>
      </div>
      <div style={{ textAlign: "right" }}>
        <h4>{show.Location}</h4>
      </div>
      <BuyLink>
        <h4>
          <a href={show.URL}>Tickets</a>
        </h4>
      </BuyLink>
    </StyledShow>
  )
}

export default Show
