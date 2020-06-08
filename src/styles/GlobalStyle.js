import { ThemeProvider, createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @font-face {
    @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
    font-family: 'Lato';
    font-weight: normal;
    font-style: normal;
  }
  
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Lato';
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.offWhite};
  }
  button {  font-family: 'Lato'; }
`

export default GlobalStyle
