import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`

  ${reset}
  *, *:before, *:after {
    box-sizing: border-box;
  }

  
  html {
    box-sizing: border-box;
    font-size: 10px;
    scroll-behavior: smooth;
    color: ${({ theme }) => theme.color.black}; 
  }
  
  body {
    background-color: ${props => props.theme.color.offWhite};
    min-height: 100%;
  }

  h1 {
    font-family: "FormaDJRBanner";
    font-weight: bold;
    font-size: 27.5rem;
    line-height: 22rem;
    letter-spacing: 0;

    @media only screen and (max-width: 1700px) {
      font-size: 15vw;
      line-height: 12vw;
    }
    @media only screen and (max-width: 896px) {
      font-size: 14.4vw;
    }
  }

  h2 {
    font-family: 'FormaDJRBanner';
    font-style: normal;
    font-weight: 500;
    font-size: 26rem;
    line-height: 22rem;
    letter-spacing: 0;
    @media only screen and (max-width: 1700px) {
      font-size: 15vw;
      line-height: 12vw;
    }
  }

  h3 {
    font-family: 'FormaDJRBanner';
    font-weight:500;
    font-style: normal;
    font-size: 12.5rem;
    line-height: 11rem;
    letter-spacing: 0;
    @media only screen and (max-width: 1700px) {
      font-size: 8vw;
      /* line-height: 12vw; */
    }
  }

  h4 {
    font-family: 'FormaDJRText';
    font-weight: 500;
    font-style: normal;
    font-size: 4.8rem;
    line-height: 7.5rem;
    letter-spacing: 0;
  }

  h5 {
    font-family: "FormaDJRText";
    font-weight: normal;
    font-style: normal;
    font-size: 4.5rem;
    line-height: 7.5rem;
    letter-spacing: 0;
    @media only screen and (max-width: 1700px) {
      font-size: 3vw;
      /* line-height: 12vw; */
    }
  }

  p {
    font-family: 'FormaDJRText';
    font-weight: normal;
    font-style: normal;
    font-size: 2rem;
    line-height: 2.4rem;
    letter-spacing: 50;
  }

  a {
    font-weight: normal;
    text-decoration: none;
    color: ${props => props.theme.color.black};
  }
`

export default GlobalStyle
