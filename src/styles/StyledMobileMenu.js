import styled from "styled-components"

export const StyledSecondaryMenu = styled.nav`
  margin-top: 2rem;
  position: relative;
  /* z-index: 999; */
  background: ${({ theme }) => theme.color.offWhite};
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
`

export const Content = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
`
