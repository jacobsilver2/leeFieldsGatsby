import styled from "styled-components"

const StyledFooter = styled.footer`
  height: ${({ theme }) => theme.headerHeight};
  background-color: ${({ theme }) => theme.color.offWhite};
  border-top: 1px solid black;

  .inner {
    height: 100%;
    margin: auto ${({ theme }) => theme.spacing[4]};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export default StyledFooter
