import styled from "styled-components"
import { Form, Field, ErrorMessage } from "formik"

export const Wrapper = styled.div`
  border-top: 1px solid black;
  min-height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  @media only screen and (max-width: 1080px) {
    min-height: 25rem;
  }
  @media only screen and (max-width: 750px) {
    min-height: 18rem;
  }
`

export const Content = styled.div`
  position: relative;
  margin: auto;
`

export const Title = styled.h3`
  margin-bottom: 1rem;
  text-align: center;
  line-height: 1;
`
export const TheForm = styled.div`
  max-width: 70%;
  margin: 0 auto;
  margin-top: 1rem;
  /* margin-bottom: 0; */
  /* border-bottom: 1px solid black; */

  /* @media only screen and (max-width: 750px) {
    margin: 0.5rem auto;
  } */
`

export const StyledFormikForm = styled(Form)`
  display: flex;
  width: 100%;
  position: relative;
  justify-content: space-between;
  &:after {
    content: "";
    position: absolute;
    left: 0.2rem;
    bottom: 0px;
    right: 0.2rem;
    margin: auto;
    background: #000;
    height: 1px;
  }
`

export const StyledFormikField = styled(Field)`
  flex-grow: 1;
  border: 1px solid #ccc;
  background-color: #fff;
  border: 0;
  background-color: ${({ theme }) => theme.color.offWhite};
  font-size: ${({ theme }) => theme.fontSize.h5};
  @media only screen and (max-width: 1700px) {
    font-size: 3vw;
  }
  opacity: 1;
  &:focus {
    outline: none;
  }
`

export const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  background-color: #fff;
  border: 0;
  background-color: ${({ theme }) => theme.color.offWhite};
  font-size: ${({ theme }) => theme.fontSize.h5};
  @media only screen and (max-width: 1700px) {
    font-size: 3vw;
  }
  opacity: 1;
  &:focus {
    outline: none;
  }
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
  }
`

export const ErrMessage = styled.p`
  color: red;
  font-size: 1.5rem;
`

export const StyledFormikError = styled(ErrorMessage)`
  color: red;
  font-family: ${({ theme }) => theme.font.text};
  font-size: 1.5rem;
  margin-top: 0.5rem;
  position: absolute;
  @media only screen and (max-width: 750px) {
    font-size: 2vw;
  }
`

export const StyledMailChimpResult = styled.p`
  color: red;
  font-size: 1.5rem;
  margin-top: 0.5rem;
  position: absolute;
  @media only screen and (max-width: 750px) {
    font-size: 2vw;
  }
`
