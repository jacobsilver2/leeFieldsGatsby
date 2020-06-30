import styled from "styled-components"

export const Wrapper = styled.div`
  border-top: 1px solid black;
  height: 40rem;
  display: grid;
  grid-template-rows: 1fr 1fr;
  @media only screen and (max-width: 1700px) {
    height: 30rem;
  }
  @media only screen and (max-width: 1080px) {
    height: 25rem;
  }
  @media only screen and (max-width: 828px) {
    height: 20rem;
  }
  @media only screen and (max-width: 750px) {
    height: 18rem;
  }
`

export const Content = styled.div`
  max-width: 1300px;
  margin: auto;
`

export const Title = styled.h3`
  align-self: end;
  text-align: center;
`

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`

export const Input = styled.input`
  border: 1px solid #ccc;
  background-color: #fff;
  border: 0;
  background-color: ${({ theme }) => theme.color.offWhite};
  font-size: ${({ theme }) => theme.fontSize.h5};
  @media only screen and (max-width: 1700px) {
    font-size: 3vw;
    /* line-height: 12vw; */
  }
  opacity: 1;
`

export const Button = styled.button`
  font-size: ${({ theme }) => theme.fontSize.h5};
  border: 0;
  background-color: ${({ theme }) => theme.color.offWhite};
  border-radius: 3px;
  &:hover {
    opacity: 50%;
  }
  @media only screen and (max-width: 1700px) {
    font-size: 3vw;
    /* line-height: 12vw; */
  }
`

export const TheForm = styled.div`
  margin: auto;
  align-self: center;
  max-width: 80%;
  /* width: 50%; */
  border-bottom: 1px solid black;
`
