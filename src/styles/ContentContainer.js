import styled from "styled-components"

const ContentContainer = styled.main`
  margin: 0 ${({ theme }) => theme.spacing[4]};
  display: block;
  /* max-width: ${({ theme }) => theme.maxWidth}; */
`

export default ContentContainer
