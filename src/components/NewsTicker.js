import React, { useState } from "react"
import Ticker from "react-ticker"
import styled from "styled-components"
import PageVisibility from "react-page-visibility"

function isEven(value) {
  if (value % 2 == 0) return true
  else return false
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-right: ${({ theme }) => theme.spacing[4]};
  /* align-items: center; */
  border-bottom: 1px solid black;
  padding-top: 1.5rem;
  /* this is likely something that will need to be adjusted manually, as react-ticker doesn't seem to be very friendly with flexbox */
  min-height: 5rem;
`

const TickerContainer = styled.div`
  /* flex-grow: 2; */
  width: 98%;
`

const TickerItem = styled.p`
  opacity: ${({ isEven }) => (isEven ? "100%" : "50%")};
  white-space: nowrap;
  margin: 0 4rem;
`

const CloseButton = styled.button`
  margin-top: -1.2rem;
  font-size: 3rem;
  font-weight: normal;
  border: 0;
  background-color: ${({ theme }) => theme.color.offWhite};
  &:hover {
    opacity: 50%;
  }
`

const NewsTicker = ({ setTickerIsVisible }) => {
  const [pageIsVisible, setPageIsVisible] = useState(true)
  const handleVisibilityChange = isVisible => {
    setPageIsVisible(isVisible)
  }
  return (
    <PageVisibility onChange={handleVisibilityChange}>
      <Wrapper>
        <TickerContainer>
          {pageIsVisible && (
            <Ticker>
              {({ index }) => (
                <>
                  <TickerItem isEven={isEven(index)}>
                    NEW ALBUM "IT RAINS LOVE" OUT NOW ON BIG CROWN RECORDS
                  </TickerItem>
                </>
              )}
            </Ticker>
          )}
        </TickerContainer>
        <CloseButton onClick={() => setTickerIsVisible(false)}>
          &#x2715;
        </CloseButton>
      </Wrapper>
    </PageVisibility>
  )
}

export default NewsTicker
