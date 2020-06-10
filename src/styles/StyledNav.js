import styled from "styled-components"
import { Link } from "gatsby"

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* margin-left: 10px;
  margin-right: 10px; */
  /* height: 100%; */
  /* border: 5px solid black; */
`

export const StyledGatsbyLink = styled(Link)`
  color: ${({ theme }) => theme.color.black};
  padding: 0 ${({ theme }) => theme.spacing[2]};
  font-size: ${({ theme }) => theme.fontSize["2xl"]};
  text-align: center;
  /* text-transform: uppercase; */
  font-weight: ${({ theme }) => theme.fontWeight.light};
  letter-spacing: ${({ open }) => (open ? "0.5rem" : "")};
  /* transition: color 0.3s linear; */
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    text-align: center;
  }
`
export const StyledLogo = styled.h1`
  /* font-family: ${({ theme }) => theme.font.serif}; */
  font-size: ${({ theme }) => theme.fontSize["8xl"]};
  letter-spacing: ${({ theme }) => theme.letterSpacing.tightest};
  margin-top: 1.75rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`
export const StyledLink = styled.a`
  color: ${({ theme }) => theme.color.black};
  padding: 0 ${({ theme }) => theme.spacing[2]};
  font-size: ${({ theme }) => theme.fontSize["2xl"]};
  text-align: center;
  /* text-transform: uppercase; */
  font-weight: ${({ theme }) => theme.fontWeight.light};
  letter-spacing: ${({ open }) => (open ? "0.5rem" : "")};
  /* transition: color 0.3s linear; */
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    text-align: center;
  }
`

export const NavButton = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props =>
    props.open ? props.theme.color.black : props.theme.color.offWhite};
  padding: 0 1rem;
  margin: 0 1rem;
  letter-spacing: ${({ open }) => (open ? "0.5rem" : "")};
  border: 1px solid ${props =>
    props.open ? props.theme.color.black : props.theme.color.offWhite};
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
    color: ${props => props.theme.color.blue};
  }
`
