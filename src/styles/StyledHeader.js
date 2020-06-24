import styled from "styled-components"

const StyledHeader = styled.header`
border-bottom: ${({ cnnIsVisible }) => (cnnIsVisible ? "" : "1px solid black")};
position: -webkit-sticky; /* Safari */
position: sticky;
top: 0;
left: 0;
right: 0;
/* max-height: ${({ theme }) => theme.spacing[32]}; */
height: ${({ theme }) => theme.headerHeight};
z-index: 999;
background-color: ${({ theme }) => theme.color.offWhite};
.inner {
  margin: auto ${({ theme }) => theme.spacing[4]};
  display: flex;
  align-items: center;
  justify-content: space-between;
}
/* margin-bottom: ${({ theme }) => theme["4xl"]}; */
  /* position: relative; */
  /* left: 0; */
  /* height: ${props => props.theme.headerHeight}; */
`

export default StyledHeader
