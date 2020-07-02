import styled from "styled-components"

export const StyledMobileMenu = styled.nav`
  position: absolute;
  border: none;
  padding: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: ${({ theme }) => theme.color.offWhite};
  opacity: 98%;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  /* height: calc(100vh - ${({ theme }) => theme.headerHeight}); */
  /* text-align: left; */
  /* padding: 2rem; */
  /* top: ${({ theme }) => theme.headerHeight}; */
  /* right: 0; */

  /* @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  } */


  /* a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  } */
`

export const Content = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`
