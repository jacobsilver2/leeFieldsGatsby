import styled from "styled-components"

const StyledHeader = styled.header`
  position: relative;
  left: 0;
  box-sizing: border-box;
  z-index: 3;
  height: 10rem;
  background: ${props => props.theme.blue};
  color: ${props => props.theme.offWhite};
  a {
    text-decoration: none;
  }
`

export default StyledHeader
