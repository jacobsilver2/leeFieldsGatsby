import { createGlobalStyle } from "styled-components"

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

const Fonts = createGlobalStyle`
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
         url(${FormaDJRBannerMedEOT});
  }
  @font-face {
    font-family: ${({ theme }) => theme.font.text};
    src: url(${FormaDJRTextRegWoff2}) format('woff2'),
         url(${FormaDJRTextRegWoff}) format('woff'),
         url(${FormaDJRTextRegEOT});
  }
  @font-face {
    font-family: ${({ theme }) => theme.font.bold};
    src: url(${FormaDJRTextMedWoff2}) format('woff2'),
         url(${FormaDJRTextMedWoff}) format('woff'),
         url(${FormaDJRTextMedEOT});
  }
`

export default Fonts
