import styled from "styled-components"

export const StyledBigLogo = styled.h1`
  padding-top: ${({ theme }) => theme.spacing[20]};
  padding-bottom: ${({ theme }) => theme.spacing[20]};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.cnn};
  /* font-size: calc(6.5rem + (250 - 65) * ((100vw - 300px) / (1800 - 300))); */
  /* font-size: ${({ theme }) => theme.fontSize.cnnvw}; */
  line-height: ${({ theme }) => theme.lineHeight.tiny};
  font-weight: ${({ theme }) => theme.fontWeight.extrabold};
`

export const BigLogoWrapper = styled.div`
/* background-color: ${({ theme }) => theme.color.black}; */
  /* height: 50vh; */
`
