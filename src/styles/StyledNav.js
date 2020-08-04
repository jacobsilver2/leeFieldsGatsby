import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const CustomUnderline = css`
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 10px;
    right: 0;
    margin: auto;
    background: #000;
    height: 2px;
  }
`

export const StyledGatsbyLink = styled(Link)`
  position: relative;
  padding-right: ${({ theme, isleft }) => (isleft ? theme.spacing[8] : "")};
  padding-left: ${({ theme, isright }) => (isright ? theme.spacing[8] : "")};
  text-align: center;
  &:hover {
    text-decoration: ${({ issecondarynav }) =>
      issecondarynav ? "" : "underline"};
    ${({ issecondarynav }) => (issecondarynav ? CustomUnderline : "")}
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
  }
`

export const StyledNavElement = styled.div`
  position: relative;
  cursor: pointer;
  padding-right: ${({ theme, isleft }) => (isleft ? theme.spacing[8] : "")};
  padding-left: ${({ theme, isright }) => (isright ? theme.spacing[8] : "")};
  /* this is a hack because for some reason it wasn't receiving props */
  padding-right: ${({ theme }) => theme.spacing[8]};
  text-align: center;
  &:hover {
    text-decoration: ${({ issecondarynav }) =>
      issecondarynav ? "" : "underline"};
    ${({ issecondarynav }) => (issecondarynav ? CustomUnderline : "")}
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    padding-right: 0;
  }
`

export const VideoText = styled.p`
  font-size: ${({ issecondarynav }) => (issecondarynav ? "1.8rem" : "1.4rem;")};
  padding-right: ${({ theme, isleft }) => (isleft ? theme.spacing[8] : "")};
  padding-left: ${({ theme, isright }) => (isright ? theme.spacing[8] : "")};
  text-align: center;
  background-color: ${({ theme }) => theme.color.offWhite};
  &:hover {
    text-decoration: underline;
  }
`
export const StyledLogo = styled.h2`
  font-size: 2.8rem;
  margin-top: 0.4rem;
  @media only screen and (max-width: 828px) {
    font-size: 1.8rem;
  }
  @media only screen and (max-width: 667px) {
  }
  &:hover {
    opacity: 50%;
  }
  letter-spacing: 1px;
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: ${({ visible }) =>
    visible ? "opacity 1s linear" : "visibility 0s 0.5s, opacity 0.5s linear"};
  /* text doesn't totally center so this value needs to be adjusted manually according to font size */
`
export const StyledLink = styled.a`
  color: ${({ theme }) => theme.color.black};
  padding: 0 ${({ theme }) => theme.spacing[2]};
  font-size: ${({ theme }) => theme.fontSize["2xl"]};
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  letter-spacing: ${({ open }) => (open ? "0.5rem" : "")};
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
  border: 1px solid
    ${props =>
      props.open ? props.theme.color.black : props.theme.color.offWhite};
  background: none;
  cursor: pointer;
  text-align: center;
  &:hover {
    background: white;
    color: ${props => props.theme.color.blue};
  }
`

export const NavText = styled.p`
  font-size: ${({ issecondarynav }) => (issecondarynav ? "5rem" : "1.4rem;")};
  padding: ${({ issecondarynav }) => (issecondarynav ? "2rem 0" : "")};
`
