import styled from "styled-components"

const ContentContainer = styled.main`
  flex: 1;
  margin: 0 ${({ theme }) => theme.spacing[4]};
  margin-top: ${({ tickerOpen }) => (tickerOpen ? "8rem" : "3.6rem")};
  display: block;
`

export default ContentContainer
