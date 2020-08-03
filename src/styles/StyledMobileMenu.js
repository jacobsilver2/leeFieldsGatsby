import styled from "styled-components"

export const StyledSecondaryMenu = styled.nav`
  margin-top: 2rem;
  margin-left: 1rem;
  margin-bottom: 2rem;
  position: relative;
  height: 300px;
  /* height: 40vh; */
  /* z-index: 999; */
  background: ${({ theme }) => theme.color.offWhite};
  /* transition: transform 0.3s ease-in-out; */
  /* transform: ${({ open }) =>
    open ? "translateX(0)" : "translateX(-100%)"}; */
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: flex-start;
  justify-content: space-evenly;
`
