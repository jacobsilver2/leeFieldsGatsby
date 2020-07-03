import styled from "styled-components"

const StyledHeader = styled.header`
  display: block;
  border-bottom: ${({ cnnIsVisible }) =>
    cnnIsVisible ? "" : "2px solid black"};
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  min-height: ${({ tickerIsVisible }) => (tickerIsVisible ? "" : "6rem")};
  z-index: 10;
  background-color: ${({ theme }) => theme.color.offWhite};
  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 6rem;
    margin: 0 ${({ theme }) => theme.spacing[4]};
    @media only screen and (max-width: 667px) {
      min-height: 4rem;
      /* margin: 0 ${({ theme }) => theme.spacing[2]}; */
    }
  }
`

export default StyledHeader
