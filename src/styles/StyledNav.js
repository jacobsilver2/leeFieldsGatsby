import styled from "styled-components"
import { Link } from "gatsby"

export const StyledNav = styled.nav`
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`

export const StyledLink = styled(Link)`
  color: ${props => props.theme.offWhite};
  font-size: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: ${({ open }) => (open ? "0.5rem" : "")};
  transition: color 0.3s linear;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.5rem;
    text-align: center;
  }
`

export const Start = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const End = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavButton = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => (props.open ? props.theme.black : props.theme.offWhite)};
  padding: 0 1rem;
  margin: 0 1rem;
  letter-spacing: ${({ open }) => (open ? "0.5rem" : "")};
  border: 1px solid ${props =>
    props.open ? props.theme.black : props.theme.offWhite};
  background: none;
  cursor: pointer;
  text-align: center;
  /* a {
    color: ${props => props.theme.offWhite};
    &:hover {
      color: ${props => props.theme.blue};
    }
  } */
  &:hover {
    background: white;
    color: ${props => props.theme.blue};
  }
`
