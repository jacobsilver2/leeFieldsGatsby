import React from "react"
import styled from "styled-components"
import moment from "moment"
// import LargeBodyText from "../styles/LargeBodyText"

const StyledShow = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 3fr 0.75fr;
  align-items: center;
  grid-gap: 20px;

  h5 {
    @media only screen and (max-width: 1700px) {
      font-size: 2.5vw;
      line-height: 4vw;
      /* line-height: 12vw; */
    }
  }
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
        <h5>{moment(show.Date).format("MMM DD")}</h5>
      </div>
      <div>
        <h5>{show.Venue}</h5>
      </div>
      <div style={{ textAlign: "right" }}>
        <h5>{show.Location}</h5>
      </div>
      <BuyLink>
        <h5>
          <a href={show.URL} target="_blank" rel="noreferrer">
            Tickets
          </a>
        </h5>
      </BuyLink>
    </StyledShow>
  )
}

export default Show
