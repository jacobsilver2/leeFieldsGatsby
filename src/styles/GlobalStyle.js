import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
// import FormaDJRBannerBold from "../assets/fonts/FormaDJRBanner-Bold-Testing.woff2"
// import FormaDJRBannerMed from "../assets/fonts/FormaDJRBanner-Medium-Testing.woff2"
// import FormaDJRTextReg from "../assets/fonts/FormaDJRText-Regular-Testing.woff2"
// import FormaDJRTextMed from "../assets/fonts/FormaDJRText-Medium-Testing.woff2"

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
    /* line-height: 1.5; */
    /* letter-spacing: ${({ theme }) => theme.letterSpacing.normal}; */
    /* font-weight: ${({ theme }) => theme.fontWeight.normal}; */
    /* line-height: ${({ theme }) => theme.lineHeight.relaxed}; */
    min-height: 100%;
  }

  h1 {
    font-family: ${({ theme }) => theme.font.banner};
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.h1};
    line-height: 22rem;
    letter-spacing: 0;

    @media only screen and (max-width: 1700px) {
      font-size: 15vw;
      line-height: 12vw;
    }
    @media only screen and (max-width: 1200px) {
      /* line-height: 8vh; */
    }
    @media only screen and (max-width: 896px) {
      font-size: 14vw;
    }
    @media only screen and (max-width: 667px) {
      /* line-height: 4vh; */
    }
  }

  h2 {
    font-family: ${({ theme }) => theme.font.bannerMedium};
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize.h2};
    line-height: 22rem;
    letter-spacing: 0;
    @media only screen and (max-width: 1700px) {
      font-size: 15vw;
      line-height: 12vw;
    }
  }

  h3 {
    font-family: ${({ theme }) => theme.font.bannerMedium};
    font-weight:500;
    font-size: ${({ theme }) => theme.fontSize.h3};
    line-height: 11rem;
    letter-spacing: 0;
    @media only screen and (max-width: 1700px) {
      font-size: 8vw;
      /* line-height: 12vw; */
    }
  }

  h4 {
    font-family: ${({ theme }) => theme.font.bold};
    font-weight: 500;
    font-style: normal;
    font-size: ${({ theme }) => theme.fontSize.h4};
    line-height: 7.5rem;
    letter-spacing: 0;
  }

  h5 {
    font-family: ${({ theme }) => theme.font.text};
    font-weight: 500;
    font-style: normal;
    font-size: ${({ theme }) => theme.fontSize.h5};
    line-height: 7.5rem;
    letter-spacing: 0;
    @media only screen and (max-width: 1700px) {
      font-size: 3vw;
      /* line-height: 12vw; */
    }
  }

  p {
    font-family: ${({ theme }) => theme.font.text};
    font-weight: normal;
    font-style: normal;
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
