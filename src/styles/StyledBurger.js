// Burger.styled.js
import styled from "styled-components"
export const StyledBurger = styled.a`
  width: 25px;
  height: 25px;
  position: relative;
  display: block;
  margin: 100px auto 100px auto;

  .line {
    display: block;
    background: black;
    width: 100px;
    height: 8px;
    position: absolute;
    left: 0;
    border-radius: 4px;
    transition: all 0.4s;
    -webkit-transition: all 0.4s;
    -moz-transition: all 0.4s;

    &.line-1 {
      top: 0;
    }
    &.line-2 {
      top: 50%;
    }
    &.line-3 {
      top: 100%;
    }

  }
  &:hover, &:focus {
     .line-1 {
        transform: translateY(-4px);
        -webkit-transform: translateY(-4px);
        -moz-transform: translateY(-4px);
     }
    .line-3 {
        transform: translateY(4px);
        -webkit-transform: translateY(4px);
        -moz-transform: translateY(4px);
    }  
  }
  &.active {
    .line-1 {
      transform: translateY(25px) translateX(0) rotate(45deg);
      -webkit-transform: translateY(25px) translateX(0) rotate(45deg);
      -moz-transform: translateY(25px) translateX(0) rotate(45deg);
    }
    .line-2 {
      opacity:0;
    }
    .line-3 {
      transform: translateY(-25px) translateX(0) rotate(-45deg);
      -webkit-transform: translateY(-25px) translateX(0) rotate(-45deg);
      -moz-transform: translateY(-25px) translateX(0) rotate(-45deg);
    }
  }
}
`
