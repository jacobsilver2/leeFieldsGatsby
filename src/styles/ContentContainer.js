import styled from "styled-components"

const ContentContainer = styled.main`
  flex: 1;
  /* margin: 0 ${({ theme }) => theme.spacing[4]}; */
  /* margin: 0 auto; */
  margin: 0 ${({ theme }) => theme.spacing[4]};
  display: block;
  /* max-width: ${({ theme }) => theme.maxWidth}; */
`

export default ContentContainer
