import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font.sans};
    font-size: 10px;
    scroll-behavior: smooth;
    color: ${({ theme }) => theme.color.black}; 
  }
  
  body {
    background-color: ${props => props.theme.color.offWhite};
    font-size: 2rem;
    line-height: 1.5;
    letter-spacing: ${({ theme }) => theme.letterSpacing.normal};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    line-height: ${({ theme }) => theme.lineHeight.relaxed};
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.color.black};
  }
  button {  
    font-family: ${({ theme }) => theme.font.mono};
   }
`

export default GlobalStyle
