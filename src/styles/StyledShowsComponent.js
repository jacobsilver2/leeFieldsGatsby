import styled from "styled-components"

export const StyledShowsComponent = styled.div`
  position: relative;
  width: 100%;
  min-width: 500px;
  height: 50vh;
  border: 2px solid white;
  color: ${({ theme }) => theme.color.offWhite};
  background-color: black;
  opacity: 0.8;
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

export const Title = styled.h2`
  max-width: 1600px;
  margin: auto;
  text-align: center;
`
export const Wrapper = styled.div`
  /* margin: ${({ theme }) => theme.spacing[40]} 0; */
  padding: ${({ theme }) => theme.spacing[20]} 0;
`
