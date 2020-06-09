import styled from "styled-components"

const StyledHeader = styled.header`
margin: 0 ${({ theme }) => theme.spacing[4]};
position: -webkit-sticky; /* Safari */
position: sticky;
top: 0;
left: 0;
right: 0;
/* max-height: ${({ theme }) => theme.spacing[32]}; */
height: ${({ theme }) => theme.headerHeight};
z-index: 999;
display: flex;
align-items: center;
justify-content: space-between;
background-color: ${({ theme }) => theme.color.offWhite};
  /* position: relative; */
  /* left: 0; */
  /* height: ${props => props.theme.headerHeight}; */
`

export default StyledHeader
