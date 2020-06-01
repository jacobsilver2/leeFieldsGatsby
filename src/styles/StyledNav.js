import styled from "styled-components"

export const StyledNav = styled.nav`
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
  height: 100%;
  justify-content: space-between;
  align-items: center;
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
  padding: 0 1rem;
  margin: 0 1rem;
  border: 1px solid #ededed;
  background: none;
  cursor: pointer;
  &:hover {
    background: white;
    color: ${props => props.theme.blue};
  }
`
