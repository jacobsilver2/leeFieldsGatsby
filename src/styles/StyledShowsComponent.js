import styled from "styled-components"

export const StyledShowsComponent = styled.div`
  position: relative;
  width: auto;
  height: 50rem;
  border: 2px solid white;
  color: ${props => props.theme.offWhite};
  background-color: black;
`

export const ContentWrapper = styled.div`
  /* margin: auto 10px; */
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`
