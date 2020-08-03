import styled from "styled-components"

const StyledHeader = styled.header`
  display: block;
  border-bottom: ${({ cnnIsVisible }) =>
    cnnIsVisible ? "" : "1px solid black"};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  min-height: ${({ tickerIsVisible }) => (tickerIsVisible ? "" : "5rem")};
  /* z-index: 1000000; */
  background-color: ${({ theme }) => theme.color.offWhite};
  overflow: hidden;
  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
    margin: 0 ${({ theme }) => theme.spacing[5]};
    @media only screen and (max-width: 667px) {
      min-height: 4rem;
      /* margin: 0 ${({ theme }) => theme.spacing[2]}; */
    }
  }
`

export default StyledHeader
