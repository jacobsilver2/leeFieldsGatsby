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
    min-height: 20rem;
  }
`

export const Content = styled.div`
  max-width: 1300px;
  margin: auto;
`

export const Title = styled.h3`
  text-align: center;
  @media only screen and (min-width: 1080px) {
    margin-bottom: 4rem;
  }
`

export const StyledFormikForm = styled(Form)`
  display: flex;
  justify-content: space-between;
`

export const StyledFormikField = styled(Field)`
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

export const TheForm = styled.div`
  margin-top: -2rem;
  max-width: 80%;
  border-bottom: 1px solid black;
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
