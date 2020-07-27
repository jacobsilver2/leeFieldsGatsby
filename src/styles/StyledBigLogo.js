import styled from "styled-components"

export const StyledBigLogo = styled.h1`
  padding-top: ${({ theme }) => theme.spacing[20]};
  padding-bottom: ${({ theme }) => theme.spacing[20]};
  text-align: center;
`

export const BigLogoWrapper = styled.div`
  max-width: 1800px;
  margin: auto;
`
