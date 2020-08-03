import React, { useState, useContext } from "react"
import Ticker from "react-ticker"
import styled from "styled-components"
import PageVisibility from "react-page-visibility"
import { GlobalDispatchContext } from "../context/provider"
import tickerText from "../lib/tickerText"

function isEven(value) {
  if (value % 2 === 0) return true
  else return false
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-right: ${({ theme }) => theme.spacing[4]};
  /* align-items: center; */
  border-bottom: 1px solid black;
  padding-top: 1.1rem;
  /* this is likely something that will need to be adjusted manually, as react-ticker doesn't seem to be very friendly with flexbox */
  height: 4.4rem;
`

const TickerContainer = styled.div`
  /* flex-grow: 2; */
  width: 100%;
`

const TickerItem = styled.p`
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
  opacity: ${({ isEven }) => (isEven ? "100%" : "50%")};
  white-space: nowrap;
  /* newer value */
  margin: 0 1.5rem;
`

const CloseButton = styled.button`
  margin-top: -1rem;
  margin-right: ${({ theme }) => theme.spacing[2]};
  font-size: 1.4rem;
  font-weight: bold;
  color: black;
  border: 0;
  background-color: ${({ theme }) => theme.color.offWhite};
  &:hover {
    opacity: 50%;
  }
`

const NewsTicker = () => {
  const [pageIsVisible, setPageIsVisible] = useState(true)
  const dispatch = useContext(GlobalDispatchContext)
  const handleVisibilityChange = isVisible => {
    setPageIsVisible(isVisible)
  }

  return (
    // page visibility is necessary for react-ticker to not
    // bug out when switching between tabs.
    <PageVisibility onChange={handleVisibilityChange}>
      <Wrapper>
        <TickerContainer>
          {pageIsVisible && (
            <Ticker>
              {({ index }) => (
                <>
                  <TickerItem isEven={isEven(index)}>
                    <a href={tickerText.link} target="_blank" rel="noreferrer">
                      {tickerText.text}
                    </a>
                  </TickerItem>
                </>
              )}
            </Ticker>
          )}
        </TickerContainer>
        <CloseButton onClick={() => dispatch({ type: "TICKER_OFF" })}>
          &#x2715;
        </CloseButton>
      </Wrapper>
    </PageVisibility>
  )
}

export default NewsTicker
