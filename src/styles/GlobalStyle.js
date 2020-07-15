import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
import FormaDJRBannerBoldWoff from "../assets/fonts/FormaDJRBanner-Bold-Testing.woff"
import FormaDJRBannerBoldWoff2 from "../assets/fonts/FormaDJRBanner-Bold-Testing.woff2"
import FormaDJRBannerBoldEOT from "../assets/fonts/FormaDJRBanner-Bold-Testing.eot"

import FormaDJRBannerMedWoff from "../assets/fonts/FormaDJRBanner-Medium-Testing.woff"
import FormaDJRBannerMedWoff2 from "../assets/fonts/FormaDJRBanner-Medium-Testing.woff2"
import FormaDJRBannerMedEOT from "../assets/fonts/FormaDJRBanner-Medium-Testing.eot"

import FormaDJRTextRegWoff from "../assets/fonts/FormaDJRText-Regular-Testing.woff"
import FormaDJRTextRegWoff2 from "../assets/fonts/FormaDJRText-Regular-Testing.woff2"
import FormaDJRTextRegEOT from "../assets/fonts/FormaDJRText-Regular-Testing.eot"

import FormaDJRTextMedWoff from "../assets/fonts/FormaDJRText-Medium-Testing.woff"
import FormaDJRTextMedWoff2 from "../assets/fonts/FormaDJRText-Medium-Testing.woff2"
import FormaDJRTextMedEOT from "../assets/fonts/FormaDJRBanner-Medium-Testing.eot"

import FormaDJRTextLightWoff from "../assets/fonts/FormaDJRText-Light-Testing.woff"
import FormaDJRTextLightWoff2 from "../assets/fonts/FormaDJRText-Light-Testing.woff2"
import FormaDJRTextLightEOT from "../assets/fonts/FormaDJRText-Light-Testing.eot"
// import FormaDJRBannerBold from "../assets/fonts/FormaDJRBanner-Bold-Testing.woff2"
// import FormaDJRBannerMed from "../assets/fonts/FormaDJRBanner-Medium-Testing.woff2"
// import FormaDJRTextReg from "../assets/fonts/FormaDJRText-Regular-Testing.woff2"
// import FormaDJRTextMed from "../assets/fonts/FormaDJRText-Medium-Testing.woff2"

const GlobalStyle = createGlobalStyle`

  ${reset}
  *, *:before, *:after {
    box-sizing: border-box;
  }

  @font-face {
    font-family: ${({ theme }) => theme.font.banner};
    src: url(${FormaDJRBannerBoldWoff2}) format('woff2'),
         url(${FormaDJRBannerBoldWoff}) format('woff'),
         url(${FormaDJRBannerBoldEOT});
  }
  @font-face {
    font-family: ${({ theme }) => theme.font.bannerMedium};
    src: url(${FormaDJRBannerMedWoff2}) format('woff2'),
         url(${FormaDJRBannerMedWoff}) format('woff'),
         /* url(${FormaDJRBannerMedEOT}); */
  }
  @font-face {
    font-family: ${({ theme }) => theme.font.text};
    src: url(${FormaDJRTextRegWoff2}) format('woff2'),
         url(${FormaDJRTextRegWoff}) format('woff'),
         url(${FormaDJRTextRegEOT});
  }
  
  @font-face {
    font-family: ${({ theme }) => theme.font.text};
    src: url(${FormaDJRTextLightWoff2}) format('woff2'),
         url(${FormaDJRTextLightWoff}) format('woff'),
         url(${FormaDJRTextLightEOT});
  }
  @font-face {
    font-family: ${({ theme }) => theme.font.bold};
    src: url(${FormaDJRTextMedWoff2}) format('woff2'),
         url(${FormaDJRTextMedWoff}) format('woff'),
         url(${FormaDJRTextMedEOT});
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
    font-weight: normal;
    font-size: ${({ theme }) => theme.fontSize.h1};
    line-height: 22rem;
    letter-spacing: 0;

    @media only screen and (max-width: 1700px) {
      font-size: 15vw;
      line-height: 12vw;
    }
    @media only screen and (max-width: 896px) {
      font-size: 14vw;
    }
  }

  h2 {
    font-family: ${({ theme }) => theme.font.bannerMedium};
    font-weight: normal;
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
    font-weight:normal;
    font-style: normal;
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
    font-weight: normal;
    font-style: normal;
    font-size: ${({ theme }) => theme.fontSize.h4};
    line-height: 7.5rem;
    letter-spacing: 0;
  }

  h5 {
    font-family: ${({ theme }) => theme.font.text};
    font-weight: 300;
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
    font-weight: 300;
    font-style: normal;
    font-size: ${({ theme }) => theme.fontSize.p};
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
