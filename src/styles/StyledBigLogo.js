import styled from "styled-components"

export const StyledBigLogo = styled.h1`
  padding-top: ${({ theme }) => theme.spacing[20]};
  padding-bottom: ${({ theme }) => theme.spacing[20]};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.cnn};
  line-height: ${({ theme }) => theme.lineHeight.tiny};
  font-weight: ${({ theme }) => theme.fontWeight.extrabold};
`

export const BigLogoWrapper = styled.div`
/* background-color: ${({ theme }) => theme.color.black}; */
  /* height: 50vh; */
`
