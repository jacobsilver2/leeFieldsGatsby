import styled from "styled-components"

export const StyledMobileMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: ${({ theme }) => theme.color.primaryLight};
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: calc(100vh - ${({ theme }) => theme.headerHeight});
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: ${({ theme }) => theme.headerHeight};
  right: 0;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

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
