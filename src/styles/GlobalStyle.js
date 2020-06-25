import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    /* font-family: ${({ theme }) => theme.font.banner}; */
    font-size: 10px;
    scroll-behavior: smooth;
    color: ${({ theme }) => theme.color.black}; 
  }
  
  body {
    background-color: ${props => props.theme.color.offWhite};
    /* font-size: calc(1rem + ${({ theme }) =>
      theme.fluidTypographyRatio} * 1vw); */
    line-height: 1.5;
    /* letter-spacing: ${({ theme }) => theme.letterSpacing.normal}; */
    /* font-weight: ${({ theme }) => theme.fontWeight.normal}; */
    /* line-height: ${({ theme }) => theme.lineHeight.relaxed}; */
    min-height: 100%;

  }

  h1 {
    font-family: ${({ theme }) => theme.font.banner};
    font-weight: medium;
    font-size: ${({ theme }) => theme.fontSize.h1};
    line-height: 22rem;
    letter-spacing: 0;
  }

  h2 {
    font-family: ${({ theme }) => theme.font.banner};
    font-weight: medium;
    font-size: ${({ theme }) => theme.fontSize.h2};
    line-height: 11rem;
    letter-spacing: 0;
  }

  h3 {
    font-family: ${({ theme }) => theme.font.text};
    font-weight:medium;
    font-size: ${({ theme }) => theme.fontSize.h3};
    line-height: 4.7rem;
    letter-spacing: 0;
  }

  h4 {
    font-family: ${({ theme }) => theme.font.text};
    font-weight: regular;
    font-size: ${({ theme }) => theme.fontSize.h4};
    line-height: 7.5rem;
    letter-spacing: 0;
  }

  p {
    font-family: ${({ theme }) => theme.font.text};
    font-weight: regular;
    font-size: ${({ theme }) => theme.fontSize.p};
    line-height: 2.4rem;
    letter-spacing: 50;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.color.black};
  }
`

export default GlobalStyle
