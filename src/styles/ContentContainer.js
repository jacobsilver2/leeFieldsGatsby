import styled from "styled-components"

const ContentContainer = styled.main`
  margin: 0 ${({ theme }) => theme.spacing[4]};
  /* max-width: ${({ theme }) => theme.maxWidth}; */
  /* height: calc(100vh - 10rem); */
  display: block;
  /* grid-template-rows: 1fr; */
  /* align-items: center; */
  /* justify-content: center; */
`

export default ContentContainer
